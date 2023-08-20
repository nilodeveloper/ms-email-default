import constants from '../constants/changePassword.constants.json'
import Response from '../interfaces/response.interface' 

export function changePassword(data: any): Response{
    return {
        data,
        statusHttp: constants.response.success.statusHttp,
        message: constants.response.success.message
    }
}
