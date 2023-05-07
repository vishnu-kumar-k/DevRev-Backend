const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jadyn.towne@ethereal.email',
        pass: 'e7qUJychGfpQBDmE9q'
    }
});

const mailOptions = {
    from: 'vishnu109080@gmail.com',
    to: 'vishnuk55265@gmail.com',
    subject: 'Email subject',
    text: 'Email message'
};

const OTP = (req, res) => {
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.json(false);
        } else {
            console.log('Email sent: ' + info.response);
            res.json(true);
        }
    });
};

module.exports = OTP;
