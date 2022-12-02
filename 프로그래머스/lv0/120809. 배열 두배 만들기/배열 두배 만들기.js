function solution(numbers) {
  let answer= [];
    for(i = 0; i < numbers.length; i++){
        answer.push(numbers[i]*2)
    }
    return answer
}

function solution(numbers) {
    let arr = numbers.map(el => el *2)
    return arr
}

function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
    // a는 이전값 , 누적 계산값  //b = 현재값, 배열의 값 b에다 옮겨서 실행후 그값을 a에 계속 쌓아준다.
    // ... a = b 에서 곱한 값들을 담을 곳 a로 하면 배열안에 배열이 계속 쌓여서 ... 을 사용해 펼쳐준다\
    //... 을 사용하므로 이전에 계산한 값만 가지고온다(스프레드 연산자)
    // , [] 위치는 결과값을 받을 형태 이번 문제는 초기값을 [] 배열로 받으니 []로 쓴다 합산 값이면 0
}

//for()

//map()