function solution(num_str) {

let result = 0;
    for(let i =0; i<num_str.length; i ++) {
        result += parseInt(num_str[i]);
        console.log(result)
    }
    return result
}