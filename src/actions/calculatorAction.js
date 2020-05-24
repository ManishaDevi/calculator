import { CALCULATE } from './type';

export function calculateAction(result) {
    return ({type:CALCULATE, result})
}