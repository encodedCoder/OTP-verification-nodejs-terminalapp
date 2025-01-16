const nodemailer = require("nodemailer");
const config = require("../config");

async function sendEmail(to, subject, htmlMessage) {
  let transporter = nodemailer.createTransport({
    host: config.SMTP_SERVER,
    port: config.PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.EMAIL.USERNAME,
      pass: config.EMAIL.PASSWORD,
    },
  });

  let mailOptions = {
    from: config.EMAIL.USERNAME,
    to: to,
    subject: subject,
    html: htmlMessage,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
