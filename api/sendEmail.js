import nodemailer from 'nodemailer';

const E_PASS = process.env.EMAIL_PASS;

export default async (req, res) => {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jax46500@gmail.com',
        pass: E_PASS,
      },
    });

    // Convert the JSON object to a formatted string
    const jsonData = JSON.stringify(req.body, null, 2);

    // Define the email content
    const mailOptions = {
      from: 'Purchase',
      to: 'jax46500@gmail.com',
      subject: 'Purchase',
      html: `
        <p>JSON Data:</p>
        <pre>${jsonData}</pre>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};