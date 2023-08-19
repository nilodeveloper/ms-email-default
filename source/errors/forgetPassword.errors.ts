// import * as messages from '../constants/messages.json';

export async function execute(error) {
    console.log('Error: ',error)
    return {
        message: "Não foi possível enviar o email para recuperação de sua senha.",
        statusHttp: 500
    }
}