function solution(num_list) {
    num_list.sort((a, b) => a - b);
    let result = num_list.slice(0, 5);

    return result;
}