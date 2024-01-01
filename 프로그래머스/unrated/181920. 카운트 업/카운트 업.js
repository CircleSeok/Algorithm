function solution(start_num, end_num) {
    if (start_num > end_num) {
        return [];
    }

    let result = [];
    for (let i = start_num; i <= end_num; i++) {
        result.push(i);
    }

    return result;
}