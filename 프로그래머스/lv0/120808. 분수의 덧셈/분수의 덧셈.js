function solution(denum1, num1, denum2, num2) {
    // 분자
    let topNum = num1*denum2 + num2*denum1
    // 분모
    let botNum = num1*num2
    // 최소 공배수
    let maximum = 1
    // 약분
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    return [topNum/maximum, botNum/maximum]
}

//분모 덧셈
//분자 분모 최대공약수로 나눠주기
// - 분자 분모중 작은 수 찾기
// 작은수를 분자 분모로 나눠보기
// 둘다 나눠 떨어지면 나눈 수가 최대 공약수
// 안 나눠 떨어지면 작은 수를 1 줄이고 반복