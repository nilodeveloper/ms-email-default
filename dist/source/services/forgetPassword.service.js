"use strict";
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
const nodemailer_1 = __importDefault(require("nodemailer"));
const forgetPassword_constants_json_1 = __importDefault(require("../constants/forgetPassword.constants.json"));
function forgetPassword(toEmail, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let transporter = nodemailer_1.default.createTransport({
                service: process.env.EMAIL_SERVICE,
                auth: {
                    user: process.env.EMAIL_SENDER,
                    pass: process.env.PASSWORD_SENDER
                },
            });
            const mailOptions = {
                from: process.env.EMAIL_SENDER,
                to: toEmail,
                subject: forgetPassword_constants_json_1.default.forgetPassword.subject,
                html: forgetPassword_constants_json_1.default.forgetPassword.message
            };
            let result = transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("INFO", info);
                    res.send({ message: "Email de recuperação de senha enviado com sucesso para ...." });
                }
            });
            return result;
        }
        catch (e) {
            return {
                message: e,
                statusCode: 500
            };
        }
    });
}
exports.forgetPassword = forgetPassword;
