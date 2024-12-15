function solution(a, b) {
   let result1 = Number(String(a)+String(b))
   let result2 = 2*a*b
   
   if(result1 === result2) {
       return result1
   } else if(result1 > result2) {
       return result1
   } else {
       return result2
   }
   
}