const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const { name, email, number, message } = req.body;

  // Create a transporter object using nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'smpubg420@gmail.com',
      pass: 'ohix rowf ngnq fzaj',
    },
  });

  // Define the email options
  const mailOptions = {
    from: email,
    to: 'catchhowforyou@gmail.com',
    subject: 'New Message from ' + name,
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
  };

  // Send the email using nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email' });
    }
    res.send({ message: 'Email sent successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});