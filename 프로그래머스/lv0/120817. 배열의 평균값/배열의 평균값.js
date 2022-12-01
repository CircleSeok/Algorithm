function solution(numbers) {
    var answer = 0;
    let sum = 0;
    for(let i = 0; i < numbers.length; i ++)
        {sum += numbers[i];} // 배열의 요소들 하나씩 더하기
    return answer = sum / numbers.length; // 더한 값과 배열의 길이 나누기
}

//평균값
// 전체 숫자를 더하고 그 값을sum 전체 숫자의 갯수로numbers.length 나눈것
// numbers[0]