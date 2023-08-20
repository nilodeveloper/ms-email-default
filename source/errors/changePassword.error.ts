import * as errors from '../constants/error.constants.json'
import Error from '../interfaces/error.interface'

export function changePassword(error: any) : Error{
    console.log("changePassword.Errors", error)
    const uuid = getUuidMs()
    return returnErrorchangePassword(uuid)
}

function getUuidMs(){
    return process.env.MS_UUID
}

function returnErrorchangePassword(uuid){
    const result = {
        statusHttp: errors.changePassword.statusHttp,
        errorCode: errors.changePassword.errorCode + ":" +uuid,
        message: errors.changePassword.message,
    }
    return result
}
