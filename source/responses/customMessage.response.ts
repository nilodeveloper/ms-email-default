import constants from '../constants/customMessage.constants.json'
import Response from '../interfaces/response.interface' 

export function customMessageSuccess(data: any): Response{
    return {
        data,
        statusHttp: constants.response.success.statusHttp,
        message: constants.response.success.message
    }
}