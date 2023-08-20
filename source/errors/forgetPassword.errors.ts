import * as errors from '../constants/error.constants.json';
import Error from "../interfaces/error.interface"

export function forgetPassword(error) : Error{
    console.log("ForgetPassword.Errors", error)
    return errors.forgetPassword
}