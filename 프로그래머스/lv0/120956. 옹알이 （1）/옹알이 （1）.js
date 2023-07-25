function solution(babbling) {
  var answer = 0;
  var possible = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    possible.forEach((word) => {
      babbling[i] = babbling[i].replace(word, "0");
    });

    if (babbling[i].replace(/0/g, "").length === 0) {
      answer += 1;
    }
  }
  return answer;
}