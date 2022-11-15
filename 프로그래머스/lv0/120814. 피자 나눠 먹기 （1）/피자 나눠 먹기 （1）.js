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