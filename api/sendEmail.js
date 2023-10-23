import nodemailer from 'nodemailer';

const E_PASS = process.env.EMAIL_PASS;

export default async (req, res) => {
  try {
    // Parse JSON data from the request body
    const { postData, passType } = JSON.parse(req.body);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jax46500@gmail.com',
        pass: E_PASS,
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'Purchase',
      to: 'jax46500@gmail.com',
      subject: 'Purchase',
      html: `
        <p>Email: ${postData.email}</p>
        <p>Customer Name: ${postData.cust_name}</p>
        <p>Address: ${postData.line1}, ${postData.city}, ${postData.postal_code}, ${postData.district}</p>
        <p>Quantity to Mint: ${postData.qty_to_mint}</p>
        <p>Pass Type: ${passType}</p>
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