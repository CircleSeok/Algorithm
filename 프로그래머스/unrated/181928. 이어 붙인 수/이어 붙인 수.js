function solution(num_list) {
let Odd = 0;
let Even = 0;
    
    
 for(let i = 0; i < num_list.length; i++) {
     if(num_list[i] % 2 !== 0) {
         Odd = Odd * 10 + num_list[i]
     } else {
         Even = Even * 10 + num_list[i]
     }
 }
    const Result = Odd + Even;
    return Result
}

