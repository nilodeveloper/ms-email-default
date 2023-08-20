import express from 'express';
import 'dotenv/config'
import nodemailer from 'nodemailer';
import * as response from '../responses/confirmRegister.response'
import * as error from '../errors/confirmRegister.error'
import confirmRegisterMessage from '../constants/confirmRegister.constants.json'

export const confirmRegister = express()

confirmRegister.post('/confirm/register', async (req, res) => {
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
        subject: confirmRegisterMessage.email.subject,
        html: confirmRegisterMessage.email.body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
        res.status(500).send(error.confirmRegister(err))
        }else{
        console.log('INFO', info);
        res.send(response.confirmRegister(null))
        }
    });
});
