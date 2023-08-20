import express from 'express';
import 'dotenv/config'
import nodemailer from 'nodemailer';
import * as response from '../responses/confirmEmail.response'
import * as error from '../errors/confirmEmail.error'
import confirmEmailMessage from '../constants/confirmEmail.constants.json'

export const confirmEmail = express()

confirmEmail.post('/confirm/email', async (req, res) => {
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
        subject: confirmEmailMessage.email.subject,
        html: confirmEmailMessage.email.body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
        res.status(500).send(error.confirmEmail(err))
        }else{
        console.log('INFO', info);
        res.send(response.confirmEmail(null))
        }
    });
});
