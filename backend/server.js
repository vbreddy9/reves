const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const axios = require("axios");
const requestIp = require("request-ip");

const app = express();

app.use(cors({
  origin: "https://abroad.vidhyavaaradhi.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(requestIp.mw());

app.get("/home", (req, res) => {
  console.log("GET /home: Health check");
  res.status(200).json("Server running");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vidhyavaaradioverseas@gmail.com",
    pass: "iyxy lefz dyfy bbso", // App password
  },
});

const sendAutoReply = async (userEmail, userName) => {
  const mailOptions = {
    from: `"Vidhyavaaradhi Overseas Consultancy" <info@vidhyavaaradhi.com>`,
    to: userEmail,
    subject: "Thank You for Your Interest!",
    html: `<div style="padding:20px;font-family:sans-serif;">
      <h2>Hello ${userName},</h2>
      <p>Thank you for reaching out to <strong>Vidhyavaaradhi Overseas Consultancy</strong>!</p>
      <p>We'll get in touch with you shortly.</p>
      <hr/>
      <p>Call us anytime: <strong><a href="tel:+919100050502">+91 91000 50502</a></strong></p>
    </div>`,
  };
  await transporter.sendMail(mailOptions);
};

const notifyAdmin = async (formData) => {
  const mailOptions = {
    from: `"Vidhyavaaradhi Overseas Consultancy" <vidhyavaaradioverseas@gmail.com>`,
    to: "vidhyavaaradioverseas@gmail.com",
    subject: "New Lead - Study Abroad",
    html: `<div style="padding:20px;font-family:sans-serif;">
      <h2>New Inquiry Details</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mobile:</strong> ${formData.mobile}</p>
      <p><strong>Pincode:</strong> ${formData.pincode}</p>
      <p><strong>IP:</strong> ${formData.ip}</p>
    </div>`,
  };
  await transporter.sendMail(mailOptions);
};

app.post("/home/send-email", async (req, res) => {
  const { name, email, mobile, pincode } = req.body;

  if (!name || !email || !mobile || !pincode) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const ipRes = await axios.get("https://api64.ipify.org?format=json");
    const ip = ipRes.data.ip;
    const fullData = { ...req.body, ip };

    await sendAutoReply(email, name);
    await notifyAdmin(fullData);

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = app;
