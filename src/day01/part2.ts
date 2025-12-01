import {getLines} from '../utils';
import {Direction, parseInstruction} from './part1';

function getPasswordNewMethod(instructions: string[]) {
    let password = 0;
    let currentCombination = 50;
    instructions.forEach(instruction => {
        const parsed = parseInstruction(instruction);
        for (let i = 0; i < parsed.distance; i++) {
            parsed.direction === Direction.Left ? currentCombination-- : currentCombination++;
            if (currentCombination < 0 || currentCombination >= 100) {
                currentCombination = ((currentCombination % 100) + 100) % 100;
            }
            if (currentCombination === 0) {
                password++;
            }
        }
    })
    return password;
}

function main() {
    const inputFile = 'inputs/input.txt';
    const password = getPasswordNewMethod(getLines(__dirname, inputFile));
    console.log(password);
}

main();
