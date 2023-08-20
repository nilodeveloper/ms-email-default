import message from '../constants/forgetPassword.constants.json'
import Response from '../interfaces/response.interface' 

export function forgetPasswordSuccess(data: any): Response{
    return {
        statusHttp: 200,
        data,
        message: message.response.success.toString()
    }
}