import express from 'express';
import 'dotenv/config'
import nodemailer from "nodemailer";
import * as response from '../responses/forgetPassword.response'
import * as error from '../errors/forgetPassword.error'
import forgetPasswordMessage from '../constants/forgetPassword.constants.json'

export const forgetPassword = express()

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
          res.status(500).send(error.forgetPassword(err))
        }else{
          console.log("INFO", info);
          res.send(response.forgetPasswordSuccess(null))
        }
     });
});