function solution(start_num, end_num) {
  let array = [];

 
  for (let num = start_num; num >= end_num; num--) {
    array.push(num);
  }

  return array;
}