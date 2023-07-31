function solution(i, j, k) {
     let answer = 0;
    for (let num = i; num <= j; num++) {
        const numStr = num.toString();
        answer += numStr.split(k.toString()).length - 1;
    }
    return answer;
}
