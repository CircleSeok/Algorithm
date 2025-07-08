const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const nums = input[1].split(" ").map(Number);

const increaseDP = new Array(n).fill(1);
const decreaseDP = new Array(n).fill(1);


for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      increaseDP[i] = Math.max(increaseDP[i], increaseDP[j] + 1);
    }
  }
}


for (let i = n - 1; i >= 0; i--) {
  for (let j = i + 1; j < n; j++) {
    if (nums[i] > nums[j]) {
      decreaseDP[i] = Math.max(decreaseDP[i], decreaseDP[j] + 1);
    }
  }
}


let maxLength = 0;
for (let i = 0; i < n; i++) {
  maxLength = Math.max(maxLength, increaseDP[i] + decreaseDP[i] - 1);
}

console.log(maxLength);