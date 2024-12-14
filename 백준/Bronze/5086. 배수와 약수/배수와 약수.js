const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (i = 0; i < input.length - 1; i++) { // 마지막 줄 0 0 제외
  let num = input[i].split(" ").map((item) => item * 1); // 공백으로 나누고 number로 변경
  let a = num[0]; // 첫 번째 숫자
  let b = num[1]; // 두 번째 숫자
  if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}