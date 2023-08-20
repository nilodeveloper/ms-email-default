import express from 'express';
import 'dotenv/config'
import nodemailer from 'nodemailer';
import * as response from '../responses/changeEmail.response'
import * as error from '../errors/changeEmail.error'
import changeEmailMessage from '../constants/changeEmail.constants.json'

export const changeEmail = express()

changeEmail.post('/change/email', async (req, res) => {
    const subject = req.body.subject
    const html = req.body.message
    let transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.PASSWORD_SENDER
        },
    });
    const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: req.body.email,
        subject: changeEmailMessage.email.subject,
        html: changeEmailMessage.email.body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
        res.status(500).send(error.changeEmail(err))
        }else{
        console.log('INFO', info);
        res.send(response.changeEmail(null))
        }
    });
});
