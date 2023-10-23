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
    const { cust_name, line1, city, postal_code, district, qty_to_mint, email } = JSON.parse(req.body.postData);

    // Define the email content
    const mailOptions = {
      from: 'Purchase',
      to: 'jax46500@gmail.com',
      subject: 'Purchase',
      html: `
        <h2>Email: ${email}</h2>
        <h2>Customer Name: ${cust_name}</h2>
        <h2>Address: ${line1}, ${city}, ${postal_code}, ${district}</h2>
        <h2>Quantity: ${qty_to_mint}</h2>
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