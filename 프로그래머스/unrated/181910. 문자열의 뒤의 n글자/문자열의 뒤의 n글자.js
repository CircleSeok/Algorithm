function solution(my_string, n) {
    
    const strLength = my_string.length;   
    const result = my_string.substring(strLength - n);
    return result;
}