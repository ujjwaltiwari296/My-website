import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validations";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

// Simple in-memory fallback store when running without external database
const inMemoryEnquiries: Array<Record<string, unknown>> = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Honeypot check for spam bots
    if (body.companyWebsiteVerify && String(body.companyWebsiteVerify).trim() !== "") {
      return NextResponse.json(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Validate input schema with Zod
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
          message: "Please check the form for invalid fields.",
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 3. Attempt database storage if MongoDB is configured
    try {
      const db = await connectToDatabase();
      if (db) {
        await Enquiry.create({
          fullName: data.fullName,
          businessName: data.businessName,
          email: data.email,
          phone: data.phone,
          serviceType: data.serviceType,
          estimatedBudget: data.estimatedBudget,
          projectDescription: data.projectDescription,
        });
      } else {
        // Fallback for development/preview without live MongoDB
        inMemoryEnquiries.push({
          ...data,
          receivedAt: new Date().toISOString(),
        });
        console.log("Enquiry received (in-memory mode):", {
          name: data.fullName,
          business: data.businessName,
          service: data.serviceType,
          budget: data.estimatedBudget,
        });
      }
    } catch (dbError) {
      console.error("Database storage warning (falling back gracefully):", dbError);
      // Still record in memory so customer inquiry is not lost
      inMemoryEnquiries.push({
        ...data,
        receivedAt: new Date().toISOString(),
      });
    }

    // 4. Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out. We have received your project details and will review them within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please try again or reach out directly via WhatsApp or email.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    message: "Enquiry API endpoint is operational",
    count: inMemoryEnquiries.length,
  });
}
