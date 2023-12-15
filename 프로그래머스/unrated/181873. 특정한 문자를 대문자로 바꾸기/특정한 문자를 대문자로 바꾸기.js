function solution(myString, alp) {
 
  let resultString = myString
    .split('')
    .map(char => (char === alp ? char.toUpperCase() : char))
    .join('');

  return resultString;
}