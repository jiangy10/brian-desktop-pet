import { Status } from "./models";
import stand_left from "./images/stand/stand_left.gif";
import stand_right from "./images/stand/stand_right.gif";
import move_left from "./images/move/move_left.gif";
import move_right from "./images/move/move_right.gif";
import research_start_left from "./images/research/research_start_left.gif";
import research_cycle_left from "./images/research/research_cycle_left.gif";
import research_end_left from "./images/research/research_end_left.gif";
import research_start_right from "./images/research/research_start_right.gif";
import research_cycle_right from "./images/research/research_cycle_right.gif";
import research_end_right from "./images/research/research_end_right.gif";
import think_start_left from "./images/think/think_start_left.gif";
import think_cycle_left from "./images/think/think_cycle_left.gif";
import think_end_left from "./images/think/think_end_left.gif";
import think_start_right from "./images/think/think_start_right.gif";
import think_cycle_right from "./images/think/think_cycle_right.gif";
import think_end_right from "./images/think/think_end_right.gif";

function getRandomCycle() {
    return Math.floor(Math.random() * 1) + 1;
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

export const researchStartLeft: Status = {
    name: "Research Left Start",
    src: research_start_left,
    duration: 900,
    nextStatuses: []
}

export const researchCycleLeft: Status = {
    name: "Research Left Cycle",
    src: research_cycle_left,
    duration: 2700 * getRandomCycle(),
    nextStatuses: []
}

export const researchEndLeft: Status = {
    name: "Research Left End",
    src: research_end_left,
    duration: 900,
    nextStatuses: []
}
const researchStartRight: Status = {
    name: "Research Right Start",
    src: research_start_right,
    duration: 900,
    nextStatuses: []
}

const researchCycleRight: Status = {
    name: "Research Right Cycle",
    src: research_cycle_right,
    duration: 2700 * getRandomCycle(),
    nextStatuses: []
}

const researchEndRight: Status = {
    name: "Research Right End",
    src: research_end_right,
    duration: 900,
    nextStatuses: []
}

const thinkStartLeft: Status = {
    name: "Think Left Start",
    src: think_start_left,
    duration: 900,
    nextStatuses: []
}

const thinkCycleLeft: Status = {
    name: "Think Left Cycle",
    src: think_cycle_left,
    duration: 2700 * getRandomCycle(),
    nextStatuses: []
}

const thinkEndLeft: Status = {
    name: "Think Left End",
    src: think_end_left,
    duration: 900,
    nextStatuses: []
}

const thinkStartRight: Status = {
    name: "Think Right Start",
    src: think_start_right,
    duration: 900,
    nextStatuses: []
}

const thinkCycleRight: Status = {
    name: "Think Right Cycle",
    src: think_cycle_right,
    duration: 1800 * getRandomCycle(),
    nextStatuses: []
}

const thinkEndRight: Status = {
    name: "Think Right End",
    src: think_end_right,
    duration: 900,
    nextStatuses: []
}

// initial state - stand
standLeft.nextStatuses = [standRight, researchStartLeft];
standRight.nextStatuses = [standLeft, researchStartRight];

// move
moveLeft.nextStatuses = [standLeft];
moveRight.nextStatuses = [standRight];

// research
researchStartLeft.nextStatuses = [researchCycleLeft];
researchCycleLeft.nextStatuses = [researchEndLeft];
researchEndLeft.nextStatuses = [standLeft];
researchStartRight.nextStatuses = [researchCycleRight];
researchCycleRight.nextStatuses = [researchEndRight];
researchEndRight.nextStatuses = [standRight];

// think
thinkStartLeft.nextStatuses = [thinkCycleLeft];
thinkCycleLeft.nextStatuses = [thinkEndLeft];
thinkEndLeft.nextStatuses = [standLeft];
thinkStartRight.nextStatuses = [thinkCycleRight];
thinkCycleRight.nextStatuses = [thinkEndRight];
thinkEndRight.nextStatuses = [standRight];
