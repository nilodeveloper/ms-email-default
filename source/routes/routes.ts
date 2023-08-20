
import { helloWorld } from './helloWorld.route';
import { forgetPassword } from './forgetPassword.route';
import { customMessage } from './customEmail.route';

export function routes(){
    return [
        helloWorld,
        forgetPassword,
        customMessage
    ]
}