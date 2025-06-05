const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const numList = [];
const selected = [];
for (let i = 1; i <= n; i += 1) {
  numList.push(i);
}

let answer = "";
const dfs = (array, depth, start) => {
  if (depth === m) {
    const result = [];
    for (let i of selected) result.push(numList[i]);
    answer += result.join(" ") + "\n";
    return;
  }

  for (let i = start; i < n; i += 1) {
    selected.push(i);
    dfs(numList, depth + 1, i);
    selected.pop();
  }
};
dfs(numList, 0, 0);
console.log(answer);