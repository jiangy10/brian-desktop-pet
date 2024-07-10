import { Status } from "./models";
import move_left from "./images/move/move_left.gif";
import move_right from "./images/move/move_right.gif";
import research_left from "./images/research/research_left.gif";
import research_right from "./images/research/research_right.gif";

export const standLeft: Status = {
    name: "Stand Left",
    src: "standLeft",
    duration: 5000
}

const standRight: Status = {
    name: "Stand Right",
    src: "standRight",
    duration: 5000
}

const moveLeft: Status = {
    name: "Move Left",
    src: move_left,
    duration: 1800,
    speed: -10
}

const moveRight: Status = {
    name: "Move Right",
    src: move_right,
    duration: 1800,
    speed: 10
}

const researchLeft: Status = {
    name: "Research Left",
    src: research_left,
    duration: 2700
}

const researchRight: Status = {
    name: "Research Right",
    src: research_right,
    duration: 2700

}

export const statuses: Status[] = [
    moveLeft,
    moveRight,
    researchLeft,
    researchRight
];