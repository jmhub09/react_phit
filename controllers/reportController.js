const nodemailer = require("nodemailer");
const config = require("../config.json");
module.exports = {
  submitReport: async function(req, res) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      //   host: "smtp.ethgmailereal.email",
      //   port: 587,
      service: "gmail",
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.flag, // generated ethereal user
        pass: config.phitlosophy // generated ethereal password
      },
      name: "reallycoolname"
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${req.body.username} <barrphitness@gmail.com>`, // sender address
      to: config.flag, // list of receivers
      subject: `Phit Report: ${req.body.reportCategory}`, // Subject line
      text: `Report for: ${req.body.reportedUser}. Reported User URL: ${
        req.body.reportedUserURL
      }. Report text: ${req.body.reportText}` // plain text body
      // html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
};
