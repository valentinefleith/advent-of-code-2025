import {getLines} from '../utils';

function findBiggestDigitIndexInRange(series: number[], start: number, end?: number) {
    return series.slice(start, end).indexOf(Math.max(...series.slice(start, end))) + start;
}

const DIGIT_NB = 12;

function findJoltage(banks: string[]): number {
    return banks.map(bank => {
        const series = bank.split('').map(c => parseInt(c));
        let final = '';
        let biggestIdx = -1;
        for (let i = 0; i < DIGIT_NB; i++) {
            const lowerBound = biggestIdx + 1;
            const upperBound = DIGIT_NB > i + 1 ? series.length - (DIGIT_NB - 1 - i) : undefined;
            biggestIdx = findBiggestDigitIndexInRange(series, lowerBound, upperBound);
            final += series[biggestIdx].toString();
        }
        return final;
    }).reduce((acc, curr) => acc + parseInt(curr), 0);
}

function main() {
    const inputFile = 'inputs/input.txt';
    const lines = getLines(__dirname, inputFile);
    console.log(findJoltage(lines));
}

main();
