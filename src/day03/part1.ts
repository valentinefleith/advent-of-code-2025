import {getLines} from '../utils';

function findJoltage(banks: string[]): number {
    return banks.map(bank => {
        const series = bank.split('').map(c => parseInt(c));
        const firstIdx = series.indexOf(Math.max(...series.slice(0, (series.length - 1))));
        const secondValue = Math.max(...series.slice(firstIdx + 1));
        return series[firstIdx].toString() + secondValue.toString();
    }).reduce((acc, curr) => acc + parseInt(curr), 0);
}

function main() {
    const inputFile = 'inputs/input.txt';
    const lines = getLines(__dirname, inputFile);
    console.log(findJoltage(lines));
}

main();
