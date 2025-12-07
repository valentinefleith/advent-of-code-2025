import {getLines, rangeOverlaps} from '../utils';

function mergeRanges(a: number[], b: number[]): number[] {
    if (!rangeOverlaps([a[0], a[1]], [b[0], b[1]])) {
        throw new Error('Cannot merge non overlapping ranges');
    }
    return a[1] < b[1] ? [a[0], b[1]] : [a[0], a[1]];
}

function mergeRules(rules: number[][]) {
    rules = rules.sort((a, b) => a[0] > b[0] ? 1 : -1);
    const newRules = [rules[0]];
    for (let i = 1; i < rules.length; i++) {
        const lastNewRule = newRules[newRules.length - 1];
        if (rangeOverlaps([lastNewRule[0], lastNewRule[1]], [rules[i][0], rules[i][1]])) {
            newRules[newRules.length - 1] = mergeRanges(lastNewRule, rules[i]);
        } else {
            newRules.push(rules[i]);
        }
    }
    return newRules;
}

function atLeastOneOverlapInRanges(ranges: number[][]) {
    for (let i = 0; i < ranges.length - 1; i++) {
        if (rangeOverlaps([ranges[i][0], ranges[i][1]], [ranges[i + 1][0], ranges[i + 1][1]])) {
            return true;
        }
    }
    return false;
}

function getFresh(rules: number[][]) {
    if (!atLeastOneOverlapInRanges(rules)) {
        return rules.map(rule => rule[1] - rule[0] + 1).reduce((curr, acc) => curr + acc, 0);
    }
    return getFresh(mergeRules(rules));
}

function main() {
    const inputFile = 'inputs/input.txt';
    const lines = getLines(__dirname, inputFile);
    const separator = lines.indexOf('');
    const parsed = lines.slice(0, separator).map(r => r.split('-').map(i => parseInt(i)));
    console.log(getFresh(parsed));
}

main();
