import { statuses } from '../contants'
import { Status } from '../models';

export function getStatus(previouseStatus: Status) {
    while (true) {
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        if (randomStatus !== previouseStatus) {
            return randomStatus;
        }
    }
}
