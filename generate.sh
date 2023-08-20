#!/bin/bash

# comando adicionado: ./generate.sh route nomeFunção /endpoint/assim

if [[ "$1" == "route" ]]; then
    touch ./source/constants/$2.constants.json
    touch ./source/routes/$2.route.ts
    touch ./source/responses/$2.response.ts
    touch ./source/errors/$2.error.ts

        echo "{
    \"email\": {
        \"subject\": \"Assunto $2\",
        \"body\": \"Olá!! aqui vem o corpo da mensagem do $2\"
    },
    \"response\":{
        \"success\": {
            \"statusHttp\": 200,
            \"message\": \"$2 mensage success here!\"
        }
    },
    \"errors\":{
        \"statusHttp\": 500,
        \"message\": \"$2 mensage error here!\"
    }
}" > ./source/constants/$2.constants.json

    echo "import constants from '../constants/$2.constants.json'
import Response from '../interfaces/response.interface' 

export function $2(data: any): Response{
    return {
        data,
        statusHttp: constants.response.success.statusHttp,
        message: constants.response.success.message
    }
}" > ./source/responses/$2.response.ts

    echo "import * as errors from '../constants/error.constants.json'
import Error from '../interfaces/error.interface'

export function $2(error: any) : Error{
    console.log(\"$2.Errors\", error)
    const uuid = getUuidMs()
    return returnError$2(uuid)
}

function getUuidMs(){
    return process.env.MS_UUID
}

function returnError$2(uuid){
    const result = {
        statusHttp: errors.$2.statusHttp,
        errorCode: errors.$2.errorCode + \":\" +uuid,
        message: errors.$2.message,
    }
    return result
}" > ./source/errors/$2.error.ts

    echo "import express from 'express';
import 'dotenv/config'
import nodemailer from 'nodemailer';
import * as response from '../responses/$2.response'
import * as error from '../errors/$2.error'
import "$2"Message from '../constants/$2.constants.json'

export const $2 = express()

$2.post('$3', async (req, res) => {
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
        subject: "$2"Message.email.subject,
        html: "$2"Message.email.body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
        res.status(500).send(error.$2(err))
        }else{
        console.log('INFO', info);
        res.send(response.$2(null))
        }
    });
});" > ./source/routes/$2.route.ts
fi