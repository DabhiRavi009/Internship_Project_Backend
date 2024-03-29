const mailer = require("nodemailer");

const mailSend = async (to, subject, text) => {
  const mailOptions = {
    from: "dabhiravi3636@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "dabhiravi3636@gmail.com",
      pass: "34370103437",
    },
  });
  const res = await transporter.sendMail(mailOptions);
  return res;
};

module.exports = {
  mailSend,
};
