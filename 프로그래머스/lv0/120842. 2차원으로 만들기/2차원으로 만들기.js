function solution(num_list, n) {
    let result = [];
    
    for(let i = 0; i < num_list.length / n; i++){
        result = [...result, num_list.slice(i * n, i * n + n)];
    }
    
    return result;
}

function solution(num_list, n) {
    var answer = [];

    for (let i = 0; i<num_list.length; i=i+n){
        answer.push(num_list.slice(i, i+n));
    }

    return answer;
}