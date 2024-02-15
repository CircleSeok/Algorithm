function solution(my_string, s, e) {
  let substringArray = my_string.substring(s, e + 1).split('');
  let reversedArray = substringArray.reverse();
  return my_string.substring(0, s) + reversedArray.join('') + my_string.substring(e + 1);
}