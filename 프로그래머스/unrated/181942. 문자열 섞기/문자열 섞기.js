function solution(str1, str2) {
  let result = "";
  const lenStr1 = str1.length;
  const lenStr2 = str2.length;
  const minLength = Math.min(lenStr1, lenStr2);

  for (let i = 0; i < minLength; i++) {
    result += str1[i] + str2[i];
  }

  result += str1.slice(minLength) + str2.slice(minLength);

  return result;
}