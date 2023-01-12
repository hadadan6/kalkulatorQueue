import { factorial } from './factorial.js';

export function probabilityZeroCustomer(l, m, s) {
    return (sigma(l, m, s) + rightPart(l, m, s)) ** -1;
}

function sigma(l, m, s) {
    const alpha = l / m;
    let result = 0;

    for (let r = 0; r < s; r++) {
        result += alpha ** r / factorial(r);
    }

    return result;
}

export function rightPart(l, m, s) {
    const alpha = l / m;

    const a = alpha ** s / factorial(s);
    const b = (1 - alpha / s) ** -1;

    return a * b;
}