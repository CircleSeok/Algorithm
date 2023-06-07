function solution(n) {
  let result = [];
  let min = 2;
  
  while (n >= 2) {
    if (n % min === 0) {
      result.push(min)
      n = n / min;
    }
    
     else min ++;
    
  }
  
  return [...new Set(result)];
}