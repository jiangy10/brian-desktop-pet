import { statuses } from '../contants'

export function getStatus() {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    console.log(randomStatus);
    return randomStatus;
}
