// api/sendEmail.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { postData } = req.body;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jax46500@gmail.com',
        pass: E_PASS,
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'Vector Contact',
      to: 'jax46500@gmail.com',
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