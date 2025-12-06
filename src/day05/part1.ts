import {getLines, arrayRange} from '../utils';

function getFresh(database: {rules: number[][], ids: number[]}) {
    return database.ids.filter(id =>
        database.rules.some(r => id >= r[0] && id <= r[1])).length;
}

function main() {
    const inputFile = 'inputs/input.txt';
    const lines = getLines(__dirname, inputFile);
    const separator = lines.indexOf('');
    const parsed = {
        rules: lines.slice(0, separator).map(r => r.split('-').map(i => parseInt(i))).sort(),
        ids: lines.slice(separator + 1).map(id => parseInt(id))
    };
    console.log(getFresh(parsed));
}

main();
