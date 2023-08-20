import message from '../constants/customMessage.constants.json'
import Response from '../interfaces/response.interface' 

export function customMessageSuccess(data: any): Response{
    return {
        statusHttp: 200,
        data,
        message: message.response.success.message
    }
}