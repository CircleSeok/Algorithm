function solution(array) {
    let maxValue = Math.max(...array);
    let j = 0
    for(let i = 0; i<array.length; i++){
        if(array[i] == maxValue) j=i
    }
    let answer = [maxValue, j];
    return answer;
}