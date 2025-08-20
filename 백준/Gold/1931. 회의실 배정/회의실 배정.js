const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());

let meeting = [];

for (let i = 0; i < N; i++) {
  meeting.push(input.shift().split(" ").map(Number));
}

meeting.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let temp = 0;
let ans = 0;
for (let j = 0; j < N; j++) {
  if (temp <= meeting[j][0]) {
    ans++;
    temp = meeting[j][1];
  }
}

console.log(ans);