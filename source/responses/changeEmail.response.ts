import constants from '../constants/changeEmail.constants.json'
import Response from '../interfaces/response.interface' 

export function changeEmail(data: any): Response{
    return {
        data,
        statusHttp: constants.response.success.statusHttp,
        message: constants.response.success.message
    }
}
