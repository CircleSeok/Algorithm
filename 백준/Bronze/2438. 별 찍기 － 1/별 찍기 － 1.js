const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = Number(input[0]);
let result = "";

for (i = 0; i < t; i++) {
  result += "*";
  console.log(result);
}