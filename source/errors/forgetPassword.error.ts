import * as errors from '../constants/error.constants.json';
import Error from "../interfaces/error.interface"

export function forgetPassword(error: any) : Error{
    console.log("customMessage.Errors", error)
    const uuid = getUuidMs()
    return returnErrorForgetPassword(uuid)
}

function getUuidMs(){
    return process.env.MS_UUID
}

function returnErrorForgetPassword(uuid){
    const result = {
        statusHttp: errors.customMessage.statusHttp,
        errorCode: errors.customMessage.errorCode + ":" +uuid,
        message: errors.customMessage.message,
    }
    return result
}