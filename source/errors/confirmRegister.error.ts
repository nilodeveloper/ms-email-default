import * as errors from '../constants/error.constants.json'
import Error from '../interfaces/error.interface'

export function confirmRegister(error: any) : Error{
    console.log("confirmRegister.Errors", error)
    const uuid = getUuidMs()
    return returnErrorconfirmRegister(uuid)
}

function getUuidMs(){
    return process.env.MS_UUID
}

function returnErrorconfirmRegister(uuid){
    const result = {
        statusHttp: errors.confirmRegister.statusHttp,
        errorCode: errors.confirmRegister.errorCode + ":" +uuid,
        message: errors.confirmRegister.message,
    }
    return result
}
