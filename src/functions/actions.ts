import { statuses } from '../contants'

export function getStatus() {
    // randomly select a status from the statuses array

    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    console.log(randomStatus);
    return randomStatus;
}