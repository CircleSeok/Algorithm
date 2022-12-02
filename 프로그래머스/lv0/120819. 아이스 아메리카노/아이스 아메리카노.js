function solution(money) {
    return [Math.floor(money/5500),money%5500]
}

//1. n = 5500
//2. 잔수 === 몫 / 나누기 / 최대로 마실수 있는 === 버림
// [최대 마실 잔수, 사고나서 남은돈]

