"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgetPasswordSuccess = void 0;
const forgetPassword_constants_json_1 = __importDefault(require("../constants/forgetPassword.constants.json"));
function forgetPasswordSuccess() {
    return {
        statusHttp: 200,
        message: forgetPassword_constants_json_1.default.response.forgetPasswordSuccess.message
    };
}
exports.forgetPasswordSuccess = forgetPasswordSuccess;
