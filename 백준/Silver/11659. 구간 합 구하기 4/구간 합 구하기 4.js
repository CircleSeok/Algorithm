const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  input.splice(0, 2);
  const jogun = input.map((v) => v.split(" "));
  const sumArr = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    sumArr[i] = sumArr[i - 1] + arr[i - 1];
  }
  for (let i = 0; i < M; i++) {
    const [start, end] = jogun[i];
    const result = sumArr[end] - sumArr[start - 1];
    console.log(result);
  }
});