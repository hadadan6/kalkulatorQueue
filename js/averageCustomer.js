import { trafficIntensity } from './trafficIntensity.js';
import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';
import { factorial } from './factorial.js';

export function averageCustomer(l, m, s) {
    const alpha = l / m;

    const Lq = averageCustomerInQueue(l, m, s);

    return alpha + Lq;
}

export function averageCustomerInQueue(l, m, s) {
    const alpha = l / m;
    const intensity = trafficIntensity(l, m, s);
    const P0 = probabilityZeroCustomer(l, m, s);

    return (intensity * alpha ** s * P0) / (factorial(s) * (1 - intensity) ** 2);
}