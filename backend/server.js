const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const requestIp = require("request-ip");

const app = express();
const PORT = 5000;

// CORS config - Allow all origins for now (adjust origin as needed)
app.use(
  cors({
    origin: "*", // For dev, allow all origins; in production, specify exact URL(s)
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.json());
app.use(requestIp.mw());

// Health check route
app.get("/home", (req, res) => {
  console.log("GET /home: Health check");
  res.status(200).json("Backend working");
});

// Nodemailer transporter - use your real Gmail credentials/app password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kvreddy499@gmail.com",
    pass: "rznh oalu cdml dkqv", // Replace with your actual Gmail app password
  },
});

// Send Auto-Reply Email to user
const sendAutoReply = async (userEmail, userName) => {
  const mailOptions = {
    from: `"REVES Township" <kvreddy499@gmail.com>`,
    to: userEmail,
    subject: "Thank You for Your Interest!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; color: #333;">
        <div style="background-color: #cb8904; color: white; padding: 15px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px;">Thank You for Contacting Us!</h1>
        </div>

        <div style="padding: 20px;">
          <h2 style="color: #cb8904;">Hello ${userName},</h2>
          <p>Thank you for reaching out to the <strong>REVES</strong> by Garudadri Developers</strong>!</p>
          <p>We appreciate your interest and will get in touch with you shortly to assist you further.</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p style="font-size: 14px; color: #555;">
            In the meantime, if you have any questions, feel free to call us anytime at 
            <strong><a href="tel:+919100298446" style="color: #cb8904; text-decoration: none;">+91-9100298446</a></strong>.
          </p>
        </div>

        <div style="background-color: #f0f0f0; padding: 15px 20px; font-size: 14px; text-align: center; color: #666;">
          <p style="margin: 0; font-style: italic;">Warm regards,<br/>Garudadri Developers Team</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// Notify Admin with Form Data
const notifyAdmin = async (formData) => {
  const mailOptions = {
    from: `"REVES Township" <kvreddy499@gmail.com>`,
    to: "kvreddy499@gmail.com",
    subject: "New Lead - REVES Township",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #cb8904; color: white; padding: 15px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Inquiry Received</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tbody>
            <tr style="background-color: #f7f7f7;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Email</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.email}</td>
            </tr>
            <tr style="background-color: #f7f7f7;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Mobile</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.mobile}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">IP Address</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.ip}</td>
            </tr>
          </tbody>
        </table>

        <div style="padding: 15px 20px; font-size: 14px; background-color: #f0f0f0; border-top: 1px solid #ddd;">
          <p style="margin: 0;">
            Please follow up with this lead as early as possible to provide assistance and further details.
          </p>
          <p style="margin: 8px 0 0; font-style: italic; color: #555;">
            Thank you,<br/>
            Garudadri Developers Team
          </p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// POST route to receive form data and send emails
app.post("/home/send-email", async (req, res) => {
  const { name, email, mobile } = req.body;
  const ip = req.clientIp || "Unknown";

  // Basic validation
  if (!name || !email || !mobile) {
    return res.status(400).json({ error: "Name, email, and mobile are required." });
  }

  try {
    // Send emails in parallel
    await Promise.all([sendAutoReply(email, name), notifyAdmin({ name, email, mobile, ip })]);
    console.log("Emails sent successfully");
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send emails", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
