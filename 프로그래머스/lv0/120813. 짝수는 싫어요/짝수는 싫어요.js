// function solution(n) {
//     var answer = [];
//     for(let i = 0; i <= n ; i ++){
//        if(i%2 === 1){
//         answer.push(i)   
//        }
//     }  
//     console.log(answer)
//     return answer;
// }

function solution(n) {
    var answer = [];
    let i = 0;
    while(i <= n) {
        if(i % 2 === 1) {
            answer.push(i)
        }
        i ++
    }
    return answer;
}

// 입력값만큼 반복문 실행
// ex)10 [1,2,3,4,5,6,7,8,9,10]
// 받은 수에서 %2 해서 남은게 1이면 홀수이니 그것만 받아서  answer에 넣기