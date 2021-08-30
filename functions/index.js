const functions = require("firebase-functions");
const nodemailer = require("nodemailer")


exports.newRequestTrigger = functions.firestore
    .document('requests/{requestId}').onCreate((snap, context) => {
        // ... Your code here
        let transporter = nodemailer.createTransport({
            service: "hotmail",
            auth: {
                user: "anna-nazolina-tutor@outlook.com",
                pass: "qwerty-tutor-</>"
            }
        })

        const data = snap.data()
        functions.logger.log(data)

        const html = '<h1>New request for tutoring:</h1><p>Name: '+data.name+'</p><p>Email: '+data.email+'</p><p>Phone number: '+data.mobileNum+'</p><br/><h3>Question: '+data.question+'</h3>'
        const options = {
            from: "anna-nazolina-tutor@outlook.com",
            to: "dancer_anna@mail.ru",
            subject: "New request from your website!",
            html: html
        }

        transporter.sendMail(options, (err, info) => {
            if (err) {
                functions.logger.log(err)
                return
            }

            functions.logger.log(info.response)
        })

    });
