import {getLines, arrayRange} from '../utils';
import {uniq} from 'lodash';

function isValidId(id: string) {
    return id.slice(0, Math.floor(id.length / 2)) !== id.slice(id.length / 2)
}

function isValidIdPart2(id: string) {
    return arrayRange(1, Math.floor(id.length / 2)).map(len => {
        const splitId = id.match(new RegExp('.{1,' + len + '}', 'g'));
        return uniq(splitId).length > 1;
    }).every(s => s);
}

function main() {
    const inputFile = 'inputs/input.txt';
    const solution = getLines(__dirname, inputFile)[0].split(',')
        .flatMap(rangeBounds => {
            const bounds = rangeBounds.split('-').map(bound => parseInt(bound));
            return arrayRange(bounds[0], bounds[1]);
        })
        .filter(number => !isValidIdPart2(number.toString()))
        .reduce((acc, curr) => acc + curr, 0);
    console.log(solution)
}

main();