const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const axios = require("axios");
const requestIp = require("request-ip");

const app = express(); // ✅ Must be declared before exporting

// ✅ CORS configuration
app.use(cors({
  origin: "https://abroad.vidhyavaaradhi.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// ✅ Middleware
app.use(bodyParser.json());
app.use(requestIp.mw());

// ✅ Health check
app.get("/home", (req, res) => {
  console.log("GET /home: Request received");
  res.status(200).json("Server running on port 5000");
});

// ✅ Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vidhyavaaradioverseas@gmail.com", // your email
    pass: "iyxy lefz dyfy bbso", // Gmail App password
  },
});

// ✅ Auto-reply to user
const sendAutoReply = async (userEmail, userName) => {
  try {
    const mailOptions = {
      from: `"Vidhyavaaradhi Overseas Consultancy" <info@vidhyavaaradhi.com>`,
      to: userEmail,
      subject: "Thank You for Your Interest in Studying Abroad!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #007bff;">Hello ${userName},</h2>
          <p>Thank you for reaching out to <strong>Vidhyavaaradhi Overseas Consultancy</strong>!</p>
          <p>We have received your details, and our expert counselors will connect with you soon.</p>
          <hr style="border: 1px solid #ddd;">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Expert guidance for top universities</li>
            <li>Scholarship opportunities</li>
            <li>Quick offer letter processing</li>
            <li>Assistance with visa & accommodation</li>
          </ul>
          <p>For urgent assistance, call us at <strong><a href="tel:+919100050502" style="color:rgb(247, 127, 7); text-decoration: none;">+91 91000 50502</a></strong>.</p>
          <p>Visit our website:  
            <a href="https://vidhyavaaradhi.com" style="color:rgb(247, 127, 7); font-weight: bold;">Vidhyavaaradhi Overseas Consultancy</a>
          </p>
          <p><strong>Best Regards,</strong><br>Vidhyavaaradhi Overseas Consultancy</p>
          <div style="background-color: #007bff; color: white; padding: 10px; text-align: center;">
            <p>&copy; 2025 | Vidhyavaaradhi Overseas Consultancy</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Auto-reply email failed:", error);
  }
};

// ✅ Notify admin
const notifyAdmin = async (formData) => {
  try {
    const adminMailOptions = {
      from: `"Vidhyavaaradhi Overseas Consultancy" <vidhyavaaradioverseas@gmail.com>`,
      to: "vidhyavaaradioverseas@gmail.com",
      subject: "New Study Abroad Lead - Vidhyavaaradhi",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #d9534f;">New Lead Details</h2>
          <hr style="border: 1px solid #ddd;">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Mobile:</strong> ${formData.mobile}</p>
          <p><strong>Pincode:</strong> ${formData.pincode}</p>
          <p><strong>IP Address:</strong> ${formData.ip}</p>
          <hr style="border: 1px solid #ddd;">
          <p><strong>Note:</strong> Please follow up with this lead at the earliest.</p>
          <div style="background-color: #007bff; color: white; padding: 10px; text-align: center;">
            <p>&copy; 2025 | Vidhyavaaradhi Overseas Consultancy</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
  } catch (error) {
    console.error("Admin email failed:", error);
  }
};

// ✅ Main form handler
app.post("/home/send-email", async (req, res) => {
  const { name, email, mobile, pincode } = req.body;

  if (!name || !email || !mobile || !pincode) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const ipResponse = await axios.get("https://api64.ipify.org?format=json");
    const ip = ipResponse.data.ip;

    const formDataWithIP = { ...req.body, ip };

    await sendAutoReply(email, name);
    await notifyAdmin(formDataWithIP);

    res.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error fetching IP or sending emails:", error);
    res.status(500).json({ error: "Failed to process the request" });
  }
});

// ✅ Fallback route
app.use((req, res) => {
  console.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

// ✅ Uncomment this block if you're running locally
// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// ✅ Export app for Vercel (important!)
module.exports = app;
