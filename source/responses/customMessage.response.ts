import message from '../constants/forgetPassword.constants.json'
import Response from '../interfaces/response.interface' 

export function customMessageSuccess(data: any): Response{
    return {
        statusHttp: 200,
        data,
        message: message.response.success.message
    }
}