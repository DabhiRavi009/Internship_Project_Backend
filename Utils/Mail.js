const mailer = require("nodemailer");

const mailSend = async (to, subject, text) => {
  let testAccount = await mailer.createTestAccount();
  try {
    const mailOptions = {
      from: "katlynn.tillman3@ethereal.email",
      to: to,
      subject: subject,
      text: text,
    };

    const transporter = mailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "katlynn.tillman3@ethereal.email",
        pass: "BQrjXcBs1hp9QyfNDA",
      },
    });

    const res = await transporter.sendMail(mailOptions);
    console.log("Email sent:", res);
    return res;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = {
  mailSend,
};
