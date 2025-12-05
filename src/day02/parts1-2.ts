import {getLines} from '../utils';

const arrayRange = (start: number, stop: number, step = 1) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

function isValidId(id: string) {
    return id.slice(0, Math.floor(id.length / 2)) !== id.slice(id.length / 2)
}

function isValidIdPart2(id: string) {
}

function main() {
    const inputFile = 'inputs/input.txt';
    const solution = getLines(__dirname, inputFile)[0].split(',')
        .flatMap(rangeBounds => {
            const bounds = rangeBounds.split('-').map(bound => parseInt(bound));
            return arrayRange(bounds[0], bounds[1])
        })
        .filter(number => !isValidId(number.toString()))
        .reduce((acc, curr) => acc + curr, 0);
    console.log(solution)
}

main();