function solution(numbers) {
  return  45 - numbers.reduce((a, b) => a + b,0);
}


function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}
