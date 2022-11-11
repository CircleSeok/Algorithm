function solution(numbers) {
    var answer = 0;
    let sum = 0;
    for(let i = 0; i < numbers.length; i ++)
        {sum += numbers[i];} // 배열의 요소들 하나씩 더하기
    return answer = sum / numbers.length; // 더한 값과 배열의 길이 나누기
}