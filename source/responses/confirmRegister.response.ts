import constants from '../constants/confirmRegister.constants.json'
import Response from '../interfaces/response.interface' 

export function confirmRegister(data: any): Response{
    return {
        data,
        statusHttp: constants.response.success.statusHttp,
        message: constants.response.success.message
    }
}
