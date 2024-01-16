function solution(arr, delete_list) {
    
    const result = arr.filter(el => !delete_list.includes(el));
    return result;
}