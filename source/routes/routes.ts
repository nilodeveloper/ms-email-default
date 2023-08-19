
import { helloWorld } from './helloWorld.route';
import { forgetPassword } from './forgetPassword.route';

export function routes(){
    return [
        helloWorld,
        forgetPassword,
    ]
}