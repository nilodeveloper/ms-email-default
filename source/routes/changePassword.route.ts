import express from 'express';
import 'dotenv/config'
import nodemailer from 'nodemailer';
import * as response from '../responses/changePassword.response'
import * as error from '../errors/changePassword.error'
import changePasswordMessage from '../constants/changePassword.constants.json'

export const changePassword = express()

changePassword.post('/change/password', async (req, res) => {
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
        subject: changePasswordMessage.email.subject,
        html: changePasswordMessage.email.body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
        res.status(500).send(error.changePassword(err))
        }else{
        console.log('INFO', info);
        res.send(response.changePassword(null))
        }
    });
});
