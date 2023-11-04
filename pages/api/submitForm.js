// pages/api/submitForm.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { iname, icontact, iemail, iquery } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'YourEmailServiceProvider',
        auth: {
          user: 'tparvee@email.com',
          pass: '192118sS@',
        },
      });

      // Create an email message
      const mailOptions = {
        from: 'tparvee@gmail.com',
        to: 'tomarsuraj172@gmail.com',
        subject: 'New Data Webfinder',
        text: `
          Name: ${iname}
          Contact: ${icontact}
          Email: ${iemail}
          Query: ${iquery}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).send('Form submitted successfully.');
    } catch (error) {
      //console.error(error);
      res.status(500).send('Form submission failed.');
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
