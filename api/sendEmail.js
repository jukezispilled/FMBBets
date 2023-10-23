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

    // Parse JSON data from the request body
    const { cust_name, line1, qty_to_mint, email } = JSON.parse(req.body.postData);

    // Define the email content
    const mailOptions = {
      from: 'Purchase',
      to: 'jax46500@gmail.com',
      subject: 'Purchase',
      html: `
        <p>Customer Name: ${cust_name}</p>
        <p>Address: ${line1}</p>
        <p>Quantity to Mint: ${qty_to_mint}</p>
        <p>Email: ${email}</p>
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