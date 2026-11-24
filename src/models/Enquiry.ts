import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnquiry extends Document {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  serviceType: string;
  estimatedBudget: string;
  projectDescription: string;
  status: "new" | "in_review" | "contacted" | "archived";
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema: Schema<IEnquiry> = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [80, "Full name cannot exceed 80 characters"],
    },
    businessName: {
      type: String,
      required: [true, "Business name is required"],
      trim: true,
      maxlength: [100, "Business name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: [120, "Email cannot exceed 120 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: [20, "Phone cannot exceed 20 characters"],
    },
    serviceType: {
      type: String,
      required: [true, "Service type is required"],
      enum: [
        "Website Development",
        "E-commerce Development",
        "Web Application",
        "UI/UX Design",
        "Business Automation",
        "AI Solutions",
        "Other",
      ],
    },
    estimatedBudget: {
      type: String,
      required: [true, "Estimated budget is required"],
      enum: [
        "Below ₹10,000",
        "₹10,000–₹25,000",
        "₹25,000–₹50,000",
        "₹50,000–₹1,00,000",
        "Above ₹1,00,000",
      ],
    },
    projectDescription: {
      type: String,
      required: [true, "Project description is required"],
      maxlength: [2500, "Description cannot exceed 2500 characters"],
    },
    status: {
      type: String,
      enum: ["new", "in_review", "contacted", "archived"],
      default: "new",
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose model overwrite during hot reload
const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;
