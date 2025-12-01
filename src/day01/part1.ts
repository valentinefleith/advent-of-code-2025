import {getLines} from '../utils';

function main() {
    const inputFile = 'inputs/tiny.txt';
    const lines = getLines(__dirname, inputFile);
    console.log(lines);
}

main();