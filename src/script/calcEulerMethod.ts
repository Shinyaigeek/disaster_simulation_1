export const calcEulerMethod = (preTerm: number, diff: number, differenceEquation: (target: number) => number): number => {
    return preTerm + diff * differenceEquation(preTerm)
}