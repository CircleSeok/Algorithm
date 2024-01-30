function solution(arr, intervals) {
    let answer = [];

    intervals.forEach(interval => {
        const [start, end] = interval;
        const subarray = arr.slice(start, end + 1);
        answer.push(...subarray);
    });

    return answer;
}