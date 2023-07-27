const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 1000; // You can use any port you prefer

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve static files (HTML, CSS, JS, etc.) from a folder named "public"
app.use(express.static('public'));

// POST route for handling contact form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter for sending emails (you'll need to provide your email service details)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // E.g., Gmail, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email message options
  const mailOptions = {
    from: email,
    to: 'kevinyuzer0@gmail.com',
    subject: 'New Message from Push Past Limits Contact Form',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong. Please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Thank you for your message. We will get back to you shortly!');
    }
  });
});



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
