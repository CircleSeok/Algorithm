function solution(numList) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numList.length; i++) {
        if (i % 2 === 0) {
            oddSum += numList[i];
        } else {
            evenSum += numList[i];
        }
    }
    return Math.max(oddSum, evenSum);
}