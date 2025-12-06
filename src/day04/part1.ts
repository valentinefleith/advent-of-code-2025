import {getLines} from '../utils';

const PAPER = '@';

export class Map {
    public constructor(
        public width: number,
        public height: number,
        public data: string[][]
    ) {
    }

    private getAdjacentPos(x: number, y: number): {x: number, y:number}[] {
        const offsets = [[-1, -1], [0, -1], [1, -1], [-1,  0], [1,  0], [-1,  1], [0,  1], [1,  1]];
        return offsets.map(([dx, dy]) => ({x: x + dx, y: y + dy}))
            .filter(pos => pos.x >= 0 && pos.x < this.width && pos.y >= 0 && pos.y < this.height);
    }

    public isValidPos(x: number, y: number): boolean {
        return this.getAdjacentPos(x, y).filter(pos => this.data[pos.x][pos.y] === PAPER).length < 4;
    }
}

function countValidPos(map: Map) {
    return map.data.flatMap((line, i) =>
        line.filter((c, j) =>
            map.data[i][j] === PAPER && map.isValidPos(i, j))).length;
}

function extractPaper(map: Map) {
    return map.data.flatMap((row, i) => row.map((c, j) =>{
       if (map.isValidPos(i, j) && map.data[i][j] === PAPER) {
           return {x: i, y: j}
       }
    } )).filter(e => !!e).forEach(validPos => map.data[validPos.x][validPos.y] = '.')
}

function getAllPapersToExtract(map: Map) {
    let papersToExtract = countValidPos(map);
    let acc = papersToExtract;
    while (papersToExtract > 0) {
        extractPaper(map);
        papersToExtract = countValidPos(map);
        acc += papersToExtract;
    }
    return acc
}

function main() {
    const inputFile = 'inputs/input.txt';
    const data = getLines(__dirname, inputFile).map(l => l.split(''));
    const map = new Map(data[0].length, data.length, data);
    console.log(getAllPapersToExtract(map))
}

main();
