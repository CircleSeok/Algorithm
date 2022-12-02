function solution(n) {
if(n % 7 === 0){
   return Math.floor(n /7)
}else{
    return Math.floor(n / 7) +1
}
}
//삼항 연산자
//(조건문) ? 조건문이  true이면 실행 : false면 실행


function solution(n) {

    return n % 7 === 0 ? Math.floor(n /7) : Math.floor(n / 7) +1
}

function solution(n) {

    return Math.ceil(n/7)
}

// 소수점이 남았을때 올려줘 / 버려줘는 +1

//목 n 7 조각 n/7 16 2.xxxxxx +1

// 1 0.1xxxxdhffla =1 2.xxxxx
