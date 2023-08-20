import * as errors from '../constants/error.constants.json';
import Error from "../interfaces/error.interface"

export function customMessage(error: any) : Error{
    console.log("customMessage.Errors", error)
    return errors.customMessage
}