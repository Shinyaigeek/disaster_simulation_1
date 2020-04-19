// 完全陰解法は"解く"と言う家庭がありめんどくさいので微分方程式は一次だと制限する
export const calcCompleteImplicitMethod = (preTerm: number, diff: number, differenceEquation: number): number => {
    return preTerm / (1 - diff * differenceEquation)
}