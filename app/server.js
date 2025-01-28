
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
    const { name, email, message, to } = req.body;

    if (!name || !email || !message || !to) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // 使用するメールサービス (例: Gmail)
            auth: {
                user: "your-email@gmail.com", // 送信元メールアドレス
                pass: "your-email-password", // メールアカウントのパスワードまたはアプリパスワード
            },
        });

        // メールの詳細
        const mailOptions = {
            from: `"${name}" <${email}>`, // 送信者情報
            to: to, // 宛先
            subject: "New Message from Contact Form", // メールの件名
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // テキスト形式のメール本文
        };

        // メールを送信
        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent: " + info.response);
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
