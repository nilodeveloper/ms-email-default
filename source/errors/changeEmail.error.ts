import * as errors from '../constants/error.constants.json'
import Error from '../interfaces/error.interface'

export function changeEmail(error: any) : Error{
    console.log("changeEmail.Errors", error)
    const uuid = getUuidMs()
    return returnErrorchangeEmail(uuid)
}

function getUuidMs(){
    return process.env.MS_UUID
}

function returnErrorchangeEmail(uuid){
    const result = {
        statusHttp: errors.changeEmail.statusHttp,
        errorCode: errors.changeEmail.errorCode + ":" +uuid,
        message: errors.changeEmail.message,
    }
    return result
}
