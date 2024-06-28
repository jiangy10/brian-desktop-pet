import { Status } from "./models";

const standLeft: Status = {
    name: "Stand Left",
    src: "standLeft",
    duration: 1000
}

const standRight: Status = {
    name: "Stand Right",
    src: "standRight",
    duration: 1000
}

const moveLeft: Status = {
    name: "Move Left",
    src: "moveLeft",
    duration: 1000
}

const moveRight: Status = {
    name: "Move Right",
    src: "moveRight",
    duration: 1000
}

export const statuses: Status[] = [
    standLeft,
    standRight
];