const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let prefixSum = 0;
const count = Array(M).fill(0);
let answer = 0;

for (let i = 0; i < N; i++) {
  prefixSum += arr[i];
  const mod = prefixSum % M;

 
  if (mod === 0) answer++;


  answer += count[mod];


  count[mod]++;
}

console.log(answer);
