// api/sendEmail.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { postData } = req.body;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'your-smtp-host',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'postmaster@sandbox8b6ba6554eac4a628e8a344023c28030.mailgun.org',
        pass: '52cb45b1de7b747eab9f1e69ada47b13-324e0bb2-227b4e5f',
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'your-email@example.com',
      to: 'jukezispilled@proton.me',
      subject: 'New Post Data',
      text: `Received post data: ${postData}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}