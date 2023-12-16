function solution(numList) {
  numList.sort((a, b) => a - b);
  let resultList = numList.slice(5);

  return resultList;
}
