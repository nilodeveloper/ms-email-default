import constants from '../constants/confirmEmail.constants.json'
import Response from '../interfaces/response.interface' 

export function confirmEmail(data: any): Response{
    return {
        data,
        statusHttp: constants.response.success.statusHttp,
        message: constants.response.success.message
    }
}
