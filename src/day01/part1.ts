import {getLines} from '../utils';

enum Direction {
    Left,
    Right
}

class Rotation {
    public constructor(
        public direction: Direction,
        public distance: number
    ) {
    }
}

function parseInstruction(instruction: string): Rotation {
    return new Rotation(instruction[0] === 'L' ? Direction.Left : Direction.Right, parseInt(instruction.slice(1)));
}

function getPassword(instructions: string[]) {
    let password = 0;
    let currentCombination = 50;
    return instructions.map(instruction => {
        const parsed = parseInstruction(instruction);
        parsed.direction === Direction.Left? currentCombination += parsed.distance : currentCombination -= parsed.distance;
        return currentCombination % 100 === 0 ? 1 : 0
    }).reduce((acc, curr) => acc + curr, password);
}

function main() {
    const inputFile = 'inputs/input.txt';
    const lines = getLines(__dirname, inputFile);
    const password = getPassword(lines);
    console.log(password);
}

main();