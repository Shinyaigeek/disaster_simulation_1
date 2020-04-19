// クランクニコルソン法は"解く"と言う家庭がありめんどくさいので微分方程式は一次だと制限する
export const calcCrankNicholsonMethod = (preTerm: number, diff: number, differenceEquation: number): number => {
    return (preTerm + preTerm * differenceEquation * diff / 2) / (1 - diff * differenceEquation / 2)
}