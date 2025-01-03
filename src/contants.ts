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
import note_start_left from "./images/note/note_start_left.gif";
import note_cycle_left from "./images/note/note_cycle_left.gif";
import note_end_left from "./images/note/note_end_left.gif";
import note_start_right from "./images/note/note_start_right.gif";
import note_cycle_right from "./images/note/note_cycle_right.gif";
import note_end_right from "./images/note/note_end_right.gif";
import microscope_start_left from "./images/microscope/microscope_start_left.gif";
import microscope_cycle_left from "./images/microscope/microscope_cycle_left.gif";
import microscope_end_left from "./images/microscope/microscope_end_left.gif";
import microscope_start_right from "./images/microscope/microscope_start_right.gif";
import microscope_cycle_right from "./images/microscope/microscope_cycle_right.gif";
import microscope_end_right from "./images/microscope/microscope_end_right.gif";

function getRandomCycle(cycle: number) {
    return Math.floor(Math.random() * cycle) + 1;
}

export const standLeft: Status = {
    name: "Stand Left",
    src: stand_left,
    duration: 1000 * getRandomCycle(5),
    speed: 0,
    nextStatuses: [],
}

export const standRight: Status = {
    name: "Stand Right",
    src: stand_right,
    duration: 1000 * getRandomCycle(5),
    speed: 0,
    nextStatuses: []
}

export const moveLeft: Status = {
    name: "Move Left",
    src: move_left,
    duration: 1800 * getRandomCycle(5),
    speed: -0.1,
    nextStatuses: []
}

export const moveRight: Status = {
    name: "Move Right",
    src: move_right,
    duration: 1800 * getRandomCycle(5),
    speed: 0.1,
    nextStatuses: []
}

const researchStartLeft: Status = {
    name: "Research Left Start",
    src: research_start_left,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const researchCycleLeft: Status = {
    name: "Research Left Cycle",
    src: research_cycle_left,
    duration: 2700 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []
}

const researchEndLeft: Status = {
    name: "Research Left End",
    src: research_end_left,
    duration: 850,
    speed: 0,
    nextStatuses: []
}
const researchStartRight: Status = {
    name: "Research Right Start",
    src: research_start_right,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const researchCycleRight: Status = {
    name: "Research Right Cycle",
    src: research_cycle_right,
    duration: 2700 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []
}

const researchEndRight: Status = {
    name: "Research Right End",
    src: research_end_right,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const thinkStartLeft: Status = {
    name: "Think Left Start",
    src: think_start_left,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const thinkCycleLeft: Status = {
    name: "Think Left Cycle",
    src: think_cycle_left,
    duration: 2700 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []
}

const thinkEndLeft: Status = {
    name: "Think Left End",
    src: think_end_left,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const thinkStartRight: Status = {
    name: "Think Right Start",
    src: think_start_right,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const thinkCycleRight: Status = {
    name: "Think Right Cycle",
    src: think_cycle_right,
    duration: 1800 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []
}

const thinkEndRight: Status = {
    name: "Think Right End",
    src: think_end_right,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const noteStartLeft: Status = {
    name: "Note Left Start",
    src: note_start_left,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const noteCycleLeft: Status = {
    name: "Note Left Cycle",
    src: note_cycle_left,
    duration: 2700 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []

}

const noteEndLeft: Status = {
    name: "Note Left End",
    src: note_end_left,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const noteStartRight: Status = {
    name: "Note Right Start",
    src: note_start_right,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const noteCycleRight: Status = {
    name: "Note Right Cycle",
    src: note_cycle_right,
    duration: 2700 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []
}

const noteEndRight: Status = {
    name: "Note Right End",
    src: note_end_right,
    duration: 850,
    speed: 0,
    nextStatuses: []
}

const microscopeStartLeft: Status = {
    name: "Microscope Left Start",
    src: microscope_start_left,
    duration: 1300,
    speed: 0,
    nextStatuses: []
}

const microscopeCycleLeft: Status = {
    name: "Microscope Left Cycle",
    src: microscope_cycle_left,
    duration: 1800 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []
}

const microscopeEndLeft: Status = {
    name: "Microscope Left End",
    src: microscope_end_left,
    duration: 1300,
    speed: 0,
    nextStatuses: []
}

const microscopeStartRight: Status = {
    name: "Microscope Right Start",
    src: microscope_start_right,
    duration: 1300,
    speed: 0,
    nextStatuses: []
}

const microscopeCycleRight: Status = {
    name: "Microscope Right Cycle",
    src: microscope_cycle_right,
    duration: 1800 * getRandomCycle(3),
    speed: 0,
    nextStatuses: []
}

const microscopeEndRight: Status = {
    name: "Microscope Right End",
    src: microscope_end_right,
    duration: 1300,
    speed: 0,
    nextStatuses: []
}

// initial state - stand
standLeft.nextStatuses = [standRight, moveLeft, researchStartLeft, thinkStartLeft, noteStartLeft, microscopeStartLeft];
standRight.nextStatuses = [standLeft, moveRight, researchStartRight, thinkStartRight, noteStartRight, microscopeCycleRight];

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

// note
noteStartLeft.nextStatuses = [noteCycleLeft];
noteCycleLeft.nextStatuses = [noteEndLeft];
noteEndLeft.nextStatuses = [standLeft];
noteStartRight.nextStatuses = [noteCycleRight];
noteCycleRight.nextStatuses = [noteEndRight];
noteEndRight.nextStatuses = [standRight];

// microscope
microscopeStartLeft.nextStatuses = [microscopeCycleLeft];
microscopeCycleLeft.nextStatuses = [microscopeEndLeft];
microscopeEndLeft.nextStatuses = [standLeft];
microscopeStartRight.nextStatuses = [microscopeCycleRight];
microscopeCycleRight.nextStatuses = [microscopeEndRight];
microscopeEndRight.nextStatuses = [standRight];
