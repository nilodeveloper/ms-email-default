import express from 'express';
import 'dotenv/config'
import nodemailer from "nodemailer";
import * as response from '../responses/forgetEmail.response'
import forgetPasswordMessage from '../constants/forgetPassword.constants.json'

export const forgetPassword = express()

forgetPassword.get('/', (req, res) => {
    res.json({
        server: `Hello World!`
    });
});

forgetPassword.post('/forget/password', async (req, res) => {
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
        subject: forgetPasswordMessage.email.subject,
        html: forgetPasswordMessage.email.body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
          console.log(err);
        }else{
          console.log("INFO", info);
          res.send(response.forgetPasswordSuccess())
        }
     });
});