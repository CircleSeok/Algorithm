function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i ++){
        if(i % 2 === 0){
            answer += i;
        }
    }
    return answer;
}

// ++x 먼저 더해줘 그리고 나와 
// x++ 나오고 추가해줘

// += 더하고 저장해줘  sum = sum + i
// = sum = i 할당
// -=
// *=