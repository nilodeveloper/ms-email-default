"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgetPassword = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const response = __importStar(require("../responses/forgetEmail.response"));
const forgetPassword_constants_json_1 = __importDefault(require("../constants/forgetPassword.constants.json"));
exports.forgetPassword = (0, express_1.default)();
exports.forgetPassword.get('/', (req, res) => {
    res.json({
        server: `Hello World!`
    });
});
exports.forgetPassword.post('/forget/password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let transporter = nodemailer_1.default.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.PASSWORD_SENDER
        },
    });
    const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: req.body.email,
        subject: forgetPassword_constants_json_1.default.email.forgetPassword.subject,
        html: forgetPassword_constants_json_1.default.email.forgetPassword.message
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("INFO", info);
            res.send(response.forgetPasswordSuccess());
        }
    });
    // const result = await controller.forgetPassword(req.body.email, res)
    // res.json(result)
}));
