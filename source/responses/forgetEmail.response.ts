import message from '../constants/forgetPassword.constants.json'

export function forgetPasswordSuccess() {
    return {
        statusHttp: 200,
        message: message.response.success.message
    }
}