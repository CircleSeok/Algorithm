function solution(num_list) {
    return num_list.reverse()
}



function solution(num_list) {
    let arr = [];
    for(let i = num_list.length-1 ;i >= 0;i--)
        {
            arr.push(num_list[i]);
        }
    return arr
}
function solution(num_list) {
    let arr = [];
    let i = num_list.length-1
    while(i>=0) // 조건 
        {
          arr.push(num_list[i]);
          i--; 
        }
    return arr
}