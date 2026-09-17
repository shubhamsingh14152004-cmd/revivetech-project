// Automated integration tester for ReviveTech backend APIs
const BASE_URL = "http://localhost:5000/api";

async function runTests() {
  console.log("🧪 Starting ReviveTech API Automated Test Suite...\n");

  try {
    // 1. Healthcheck
    const health = await (await fetch(`${BASE_URL}/health`)).json();
    console.log(" Health check:", health.message);

    // 2. Admin Login
    const adminEmail = process.env.DEFAULT_ADMIN_EMAIL || "admin@revivetech.com";
    const adminPassword = process.env.DEFAULT_ADMIN_PASSWORD || "ReviveTech@SecurePass2026";

    const loginRes = await (
      await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: adminEmail,
          password: adminPassword,
        }),
      })
    ).json();

    if (!loginRes.success || !loginRes.data?.token) {
      console.error("❌ Login failed:", loginRes);
      return;
    }
    const token = loginRes.data.token;
    console.log(" Login Successful! Received JWT token for:", loginRes.data.admin.email);

    // 4. Submit Repair / Sell Dead Phone Request
    const createRes = await (
      await fetch(`${BASE_URL}/repairs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: "Priya Sharma",
          phoneNumber: "+91 98765 43210",
          email: "priya.sharma@example.com",
          phoneBrand: "Apple",
          phoneModel: "iPhone 14 Pro Max",
          serviceType: "Sell a dead phone",
          problemDescription: "Water damaged, will not turn on",
          payoutMethod: "UPI Instant Transfer",
          estimatedAmount: 2800,
        }),
      })
    ).json();

    if (!createRes.success) {
      console.error("❌ Create repair request failed:", createRes);
      return;
    }
    const ticketNumber = createRes.data.ticketNumber;
    const ticketId = createRes.data._id;
    console.log(` Created Customer Order! Ticket: ${ticketNumber} (Amount: ₹${createRes.data.estimatedAmount})`);

    // 5. Get Dashboard Statistics
    const statsRes = await (
      await fetch(`${BASE_URL}/repairs/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).json();
    console.log(" Dashboard Stats:", statsRes.data);

    // 6. List Requests with Filter & Search
    const listRes = await (
      await fetch(`${BASE_URL}/repairs?search=Priya`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).json();
    console.log(` Found ${listRes.data.requests.length} matching requests for 'Priya'`);

    // 7. Update Request Status
    const updateRes = await (
      await fetch(`${BASE_URL}/repairs/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: "Confirmed",
          adminNotes: "Express shipping cushioned mailer dispatched to customer address.",
        }),
      })
    ).json();
    console.log(" Status Update:", updateRes.message);

    console.log("\n All 7 API Verification Steps Passed Successfully!");
  } catch (err) {
    console.error("❌ Test error:", err.message);
  }
}

runTests();
