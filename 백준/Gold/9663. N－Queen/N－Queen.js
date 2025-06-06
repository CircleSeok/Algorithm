const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const queens = [];

function possible(row, col) { 
  for (let [x, y] of queens) {
    if (x === row || y === col) return false; 
    if (Math.abs(x - row) === Math.abs(y - col)) return false; 
  }
  return true;
}
let count = 0;
function dfs(row) {
  if (row === n) count += 1;  
  for (let col = 0; col < n; col += 1) {  
    if (!possible(row, col)) continue; 
    queens.push([row, col]);  
    dfs(row + 1);
    queens.pop();  
  }
}

dfs(0);
console.log(count);