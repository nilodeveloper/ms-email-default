import constants from '../constants/forgetPassword.constants.json'
import Response from '../interfaces/response.interface' 

export function forgetPasswordSuccess(data: any): Response{
    return {
        data,
        statusHttp: constants.response.success.statusHttp,
        message: constants.response.success.message
    }
}