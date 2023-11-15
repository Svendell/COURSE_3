const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


function send(sender, receiver, pass, message) {
    let transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: sender,
            pass: pass
        }
    }));

    var mailOptions = {
        from: sender,
        to: receiver,
        subject: 'Lab5',
        text: message,
        html: `<i>${message}</i>`
        //attachments:[{filename:`cat.jpg`, path __dirname + `/имя.jpg`, cid: `img`}]
    };

    transporter.sendMail(mailOptions, function (error, info){
        if (error) 
        {
            console.error(error);
        } 
        else 
        {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { send };
