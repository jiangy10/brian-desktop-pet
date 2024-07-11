import { Status } from "./models";
import stand_left from "./images/stand/stand_left.png";
import stand_right from "./images/stand/stand_right.png";
import move_left from "./images/move/move_left.gif";
import move_right from "./images/move/move_right.gif";
import research_left_start from "./images/research/research_left_start.gif";
import research_left_cycle from "./images/research/research_left_cycle.gif";
import research_left_end from "./images/research/research_left_end.gif";
import research_right_start from "./images/research/research_right_start.gif";
import research_right_cycle from "./images/research/research_right_cycle.gif";
import research_right_end from "./images/research/research_right_end.gif";

function getRandomCycle(){
    return Math.floor(Math.random() * 3) + 1;
}

export const standLeft: Status = {
    name: "Stand Left",
    src: stand_left,
    duration: 500,
    nextStatuses: []
}

const standRight: Status = {
    name: "Stand Right",
    src: stand_right,
    duration: 500,
    nextStatuses: []
}

const moveLeft: Status = {
    name: "Move Left",
    src: move_left,
    duration: 1800 * getRandomCycle(),
    speed: -10,
    nextStatuses: []
}

const moveRight: Status = {
    name: "Move Right",
    src: move_right,
    duration: 1800 * getRandomCycle(),
    speed: 10,
    nextStatuses: []
}

const researchLeftStart: Status = {
    name: "Research Left Start",
    src: research_left_start,
    duration: 900,
    nextStatuses: []
}

const researchLeftCycle: Status = {
    name: "Research Left Cycle",
    src: research_left_cycle,
    duration: 2700 * getRandomCycle(),
    nextStatuses: []
}

const researchLeftEnd: Status = {
    name: "Research Left End",
    src: research_left_end,
    duration: 900,
    nextStatuses: []
}
const researchRightStart: Status = {
    name: "Research Right Start",
    src: research_right_start,
    duration: 900,
    nextStatuses: []
}

const researchRightCycle: Status = {
    name: "Research Right Cycle",
    src: research_right_cycle,
    duration: 2700 * getRandomCycle(),
    nextStatuses: []
}

const researchRightEnd: Status = {
    name: "Research Right End",
    src: research_right_end,
    duration: 900,
    nextStatuses: []
}

// initial state - stand
standLeft.nextStatuses = [standRight, moveLeft, researchLeftStart];
standRight.nextStatuses = [standLeft, moveRight, researchRightStart];

// move
moveLeft.nextStatuses = [standLeft];
moveRight.nextStatuses = [standRight];

// research
researchLeftStart.nextStatuses = [researchLeftCycle];
researchLeftCycle.nextStatuses = [researchLeftEnd];
researchLeftEnd.nextStatuses = [standLeft];
researchRightStart.nextStatuses = [researchRightCycle];
researchRightCycle.nextStatuses = [researchRightEnd];
researchRightEnd.nextStatuses = [standRight];