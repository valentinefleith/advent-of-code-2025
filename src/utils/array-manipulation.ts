export const arrayRange = (start: number, stop: number, step = 1) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );


export const rangeOverlaps = ([a1, a2]: [number, number], [b1, b2]: [number, number]) => {
    return a1 <= b2 && a2 >= b1;
}
