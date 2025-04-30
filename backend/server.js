import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

console.log(process.env.FRONTEND_URL);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    allowedHeaders: ["Content-Type", "Accept-Type"],
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/v1/sendcontactformmail", (req, res) => {
  try {
    const { fullName, phoneNumber, email, message } = req.body;

    // Check required fields
    if (!fullName || !phoneNumber || !email) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required details",
      });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid email",
      });
    }

    // Create email transport
    const auth = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      secure: true,
      port: 587,
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subject = "New lead from Digirocket website";
    const submissionDate = new Date().toLocaleString();

    // Email template configuration
    const receiver = {
      from: process.env.GMAIL_ACCOUNT,
      to: process.env.TO,
      cc: [process.env.CC1, process.env.CC2],
      subject: subject,
      html: `
        <!-- Email template using Tailwind-inspired inline styles -->
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f3f4f6;">
          <div style="background-color: white; border-radius: 8px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); overflow: hidden;">
            
            <!-- Header -->
            <div style="border-bottom: 1px solid #e5e7eb; padding: 20px;">
              <h2 style="margin: 0; color: #1f2937; text-align: center; font-size: 20px; font-weight: 600;">Contact Details</h2>
            </div>
            
            <!-- Content -->
            <div style="padding: 20px; display: flex; flex-direction: column; gap: 16px;">
              
              <!-- Name -->
              <div style="background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #e7c531; padding: 12px;">
                <div style="font-weight: 500; color: #6b7280; font-size: 14px;">Name:</div>
                <div style="color: #1f2937; margin-top: 4px;">${fullName}</div>
              </div>
              
              <!-- Phone -->
              <div style="background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #e7c531; padding: 12px;">
                <div style="font-weight: 500; color: #6b7280; font-size: 14px;">Phone:</div>
                <div style="color: #1f2937; margin-top: 4px;">${phoneNumber}</div>
              </div>
              
              <!-- Email -->
              <div style="background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #e7c531; padding: 12px;">
                <div style="font-weight: 500; color: #6b7280; font-size: 14px;">Email:</div>
                <div style="color: #1f2937; margin-top: 4px;">${email}</div>
              </div>
              
              <!-- Message -->
              <div style="background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #e7c531; padding: 12px;">
                <div style="font-weight: 500; color: #6b7280; font-size: 14px;">Message:</div>
                <div style="color: #1f2937; margin-top: 4px; white-space: pre-wrap;">${message || 'No message provided'}</div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 12px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">Submitted on: ${submissionDate}</p>
            </div>
            
          </div>
        </div>
      `,
    };

    // Send email
    auth.sendMail(receiver, (err, emailResponse) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message: "There was an error while sending your message",
        });
      } else {
        return res.json({
          success: true,
          message: "Your message has been sent successfully",
        });
      }
    });
  } catch (err) {
    console.log("Error in contactformmail", err);
    return res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
});



app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});
