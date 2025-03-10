const fs = require("fs");
const S = fs.readFileSync("/dev/stdin").toString().trim();

const result = new Set();

for (let i = 0; i < S.length; i++) {
  let str = "";
  for (let j = i; j < S.length; j++) {
    str += S[j];
    result.add(str);
  }
}

console.log(result.size);