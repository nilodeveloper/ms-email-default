import express from 'express';
import 'dotenv/config'
import nodemailer from "nodemailer";
import * as response from '../responses/customMessage.response'
import * as error from '../errors/customMessage.error'

export const customMessage = express()

customMessage.post('/custom/message', async (req, res) => {
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
        subject: subject,
        html: html
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
          res.status(500).send(error.customMessage(err))
        }else{
          console.log("INFO", info);
          res.send(response.customMessageSuccess(null))
        }
     });
});