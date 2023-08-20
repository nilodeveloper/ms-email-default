import * as errors from '../constants/error.constants.json'
import Error from '../interfaces/error.interface'

export function confirmEmail(error: any) : Error{
    console.log("confirmEmail.Errors", error)
    const uuid = getUuidMs()
    return returnErrorconfirmEmail(uuid)
}

function getUuidMs(){
    return process.env.MS_UUID
}

function returnErrorconfirmEmail(uuid){
    const result = {
        statusHttp: errors.confirmEmail.statusHttp,
        errorCode: errors.confirmEmail.errorCode + ":" +uuid,
        message: errors.confirmEmail.message,
    }
    return result
}
