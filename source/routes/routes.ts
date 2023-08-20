
import { helloWorld } from './helloWorld.route';
import { forgetPassword } from './forgetPassword.route';
import { customMessage } from './customEmail.route';
import { confirmEmail } from './confirmEmail.route';
import { confirmRegister } from './confirmRegister.route';
import { changePassword } from './changePassword.route';
import { changeEmail } from './changeEmail.route';

export function routes(){
    return [
        helloWorld,
        forgetPassword,
        customMessage,
        confirmEmail,
        confirmRegister,
        changePassword,
        changeEmail
    ]
}