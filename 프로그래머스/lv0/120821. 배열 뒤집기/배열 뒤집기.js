// function solution(num_list) {
//     var answer = num_list.reverse()
//     return answer;
// }

function solution(num_list) {
    let answer = []
    for(i = num_list.length; i>=1; i--){
        answer.push(num_list[i-1])
        console.log(num_list[i])
    }
    return answer;
}

// 5

//배열을 뒤집으려면 for문으로 한번 돌아야할까? reverse 함수를 쓰면 가능