import { trafficIntensity } from './trafficIntensity.js';
import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';
import { factorial } from './factorial.js';

export function averageTimeSpent(l, m, s) {
    return 1 / m + averageTimeSpentInQueue(l, m, s);
}

export function averageTimeSpentInQueue(l, m, s) {
    const alpha = l / m;
    const P0 = probabilityZeroCustomer(l, m, s);
    const intensity = trafficIntensity(l, m, s);

    const a = alpha ** s * P0;

    const b = factorial(s) * s * m * (1 - intensity) ** 2;

    return a / b;
}