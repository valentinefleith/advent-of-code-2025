import * as fs from 'fs';
import * as path from 'path';

export const getLines = (root: string, filename: string): string[] => {
    const content = fs.readFileSync(path.join(root, filename), 'utf-8');
    return content.split(/\r?\n/);
}