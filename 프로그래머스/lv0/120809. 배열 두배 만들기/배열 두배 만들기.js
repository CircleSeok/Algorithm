function solution(numbers) {
  let answer= [];
    for(i = 0; i < numbers.length; i++){
        answer.push(numbers[i]*2)
    }
    return answer
}

function solution(numbers) {
    let arr = numbers.map(number => number *2)
    return arr
}

function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
    // ... a = b 에서 곱한 값들을 담을 곳 a로 하면 배열안에 배열이 계속 쌓여서 ... 을 사용해 펼쳐준다
    // , [] 위치는 결과값을 받을 형태 이번 문제는 초기값을 [] 배열로 받으니 []로 쓴다 합산 값이면 0
}
