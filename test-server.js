const { spawn } = require("child_process");

async function runProductionAudit() {
  console.log("=================================================");
  console.log("   VANGUARD STUDIO — FULL PRODUCTION AUDIT       ");
  console.log("=================================================");
  console.log("Starting Next.js production audit server on port 3008...\n");

  const server = spawn("node", ["./node_modules/next/dist/bin/next", "dev", "-H", "127.0.0.1", "-p", "3008"], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
  });

  server.stdout.on("data", (data) => {
    const text = data.toString();
    if (text.includes("Ready") || text.includes("Compiled")) {
      console.log("[server]", text.trim());
    }
  });

  server.stderr.on("data", (data) => {
    const text = data.toString().trim();
    if (!text.includes("node-linker")) {
      console.error("[server warning]", text);
    }
  });

  async function fetchUrl(path, options = {}) {
    const url = `http://127.0.0.1:3008${path}`;
    const start = Date.now();
    const res = await fetch(url, options);
    const duration = Date.now() - start;
    let bodyText = "";
    try {
      bodyText = await res.text();
    } catch (e) {}
    return { status: res.status, body: bodyText, duration, headers: res.headers };
  }

  // 1. Wait for server readiness
  let isReady = false;
  for (let i = 0; i < 35; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    try {
      const res = await fetch("http://127.0.0.1:3008/");
      if (res.status === 200) {
        console.log(`✓ Dev server ready in ${i + 1}s\n`);
        isReady = true;
        break;
      }
    } catch (err) {}
  }

  if (!isReady) {
    console.error("FATAL: Server failed to boot.");
    server.kill("SIGKILL");
    process.exit(1);
  }

  const results = {
    passed: 0,
    failed: 0,
  };

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✓ PASS: ${message}`);
      results.passed++;
    } else {
      console.error(`  ✗ FAIL: ${message}`);
      results.failed++;
    }
  }

  // 2. Audit All Web Routes & SEO Metadata
  console.log("--- 1. Web Routes & SEO Metadata Audit ---");
  const routes = [
    { path: "/", name: "Homepage" },
    { path: "/about", name: "About Studio" },
    { path: "/services", name: "Services Deep Dive" },
    { path: "/work", name: "Portfolio Blueprints" },
    { path: "/contact", name: "Consultation Intake" },
    { path: "/privacy-policy", name: "Privacy Policy" },
    { path: "/terms", name: "Terms of Service" },
  ];

  for (const r of routes) {
    const res = await fetchUrl(r.path);
    assert(res.status === 200, `${r.name} (${r.path}) returned HTTP 200 [${res.duration}ms]`);
    assert(res.body.includes("<title>"), `${r.name} contains valid <title>`);
    assert(res.body.includes("<meta name=\"description\"") || res.body.includes("description"), `${r.name} contains meta description`);
    assert(res.body.includes("Vanguard"), `${r.name} contains brand identity text`);
  }

  // 3. Audit URL Query Parameter Handling on /contact
  console.log("\n--- 2. Route Query Parameter Handling ---");
  const queryRes1 = await fetchUrl("/contact?service=Custom%20Web%20Applications");
  assert(queryRes1.status === 200, "Navigating with ?service query parameter returns HTTP 200");

  const queryRes2 = await fetchUrl("/contact?industry=Healthcare");
  assert(queryRes2.status === 200, "Navigating with ?industry query parameter returns HTTP 200");

  // 4. Audit Search Engine Artifacts
  console.log("\n--- 3. SEO Artifacts (Robots.txt & Sitemap.xml) ---");
  const robotsRes = await fetchUrl("/robots.txt");
  assert(robotsRes.status === 200, "robots.txt returns HTTP 200");
  assert(robotsRes.body.toLowerCase().includes("user-agent"), "robots.txt contains User-agent directive");
  assert(robotsRes.body.includes("sitemap.xml"), "robots.txt specifies sitemap.xml location");

  const sitemapRes = await fetchUrl("/sitemap.xml");
  assert(sitemapRes.status === 200, "sitemap.xml returns HTTP 200");
  assert(sitemapRes.body.includes("https://vanguardstudio.example"), "sitemap.xml lists canonical URLs");
  assert(sitemapRes.body.includes("/services"), "sitemap.xml includes /services route");
  assert(sitemapRes.body.includes("/work"), "sitemap.xml includes /work route");

  // 5. Audit Backend API (/api/contact)
  console.log("\n--- 4. Backend API Resilience & Security Audit ---");

  // Healthcheck GET
  const apiGet = await fetchUrl("/api/contact");
  assert(apiGet.status === 200, "API GET /api/contact returns HTTP 200 health status");
  const apiGetJson = JSON.parse(apiGet.body);
  assert(apiGetJson.status === "healthy", "API reports status 'healthy'");

  // Valid POST submission
  const validPayload = {
    fullName: "Aarav Deshmukh",
    businessName: "Titan Logistics",
    email: "aarav@titanlogistics.in",
    phone: "+91 98200 55443",
    serviceType: "Business Automation",
    estimatedBudget: "₹50,000–₹1,00,000",
    projectDescription: "We require automated webhook pipelines syncing shipment milestones between ERP and client notification channels.",
  };

  const validPost = await fetchUrl("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validPayload),
  });
  assert(validPost.status === 200, "API POST with valid data returns HTTP 200");
  const validJson = JSON.parse(validPost.body);
  assert(validJson.success === true, "API response returns success: true");

  // Honeypot spam submission (should be rejected)
  const spamPayload = {
    fullName: "Bot Spammer",
    businessName: "Botnet LLC",
    email: "spambot@internet.org",
    phone: "+91 99999 00000",
    serviceType: "Other",
    estimatedBudget: "Below ₹10,000",
    projectDescription: "This is a spam submission exceeding required character threshold.",
    companyWebsiteVerify: "https://spam-injection.ru", // Honeypot filled!
  };

  const spamPost = await fetchUrl("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spamPayload),
  });
  assert(spamPost.status === 400, "API correctly flags honeypot spam with HTTP 400");
  const spamJson = JSON.parse(spamPost.body);
  assert(spamJson.success === false, "Spam submission rejected with success: false");

  // Invalid data submission (e.g. invalid email)
  const invalidPayload = {
    fullName: "A", // too short (min 2)
    businessName: "",
    email: "not-an-email",
    phone: "123", // too short
    serviceType: "InvalidServiceType",
    estimatedBudget: "InvalidBudget",
    projectDescription: "Short",
  };

  const invalidPost = await fetchUrl("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invalidPayload),
  });
  assert(invalidPost.status === 400, "API rejects invalid Zod schema with HTTP 400");
  const invalidJson = JSON.parse(invalidPost.body);
  assert(invalidJson.errors && invalidJson.errors.email, "API returns specific field error for email");

  // 6. Summary
  console.log("\n=================================================");
  console.log(`   AUDIT RESULTS: ${results.passed} PASSED | ${results.failed} FAILED`);
  console.log("=================================================");

  server.kill("SIGKILL");

  if (results.failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runProductionAudit().catch((err) => {
  console.error("Audit runner fatal exception:", err);
  process.exit(1);
});
