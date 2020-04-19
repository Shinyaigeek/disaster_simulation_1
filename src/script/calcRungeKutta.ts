export const calcRungeKuttaMethod = (preTerm: number, diff: number, differenceEquation: (target: number) => number): number => {
    const one = preTerm + diff * differenceEquation(preTerm);
    const two = preTerm + diff * differenceEquation((preTerm + one) / 2)
    const three = preTerm + diff * differenceEquation((preTerm + two) / 2)
    const four = preTerm + diff * differenceEquation(three);
    return (one + 2 * two + 2 * three + four) / 6
}