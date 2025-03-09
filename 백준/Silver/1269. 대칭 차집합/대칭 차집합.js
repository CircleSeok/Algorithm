const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.split(' ').map(Number))
const [N, M] = input.shift();
const A = input.shift().sort((a, b) => a - b);
const B = input.shift().sort((a, b) => a - b);

let answer = A.length + B.length;
A.forEach(a => {
  let min = 0;
  let max = B.length - 1;
  let find = false;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (B[mid] == a) {
      find = true;
      break;
    } else if (B[mid] > a) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  if (find) answer--;
})

B.forEach(b => {
  let min = 0;
  let max = A.length - 1;
  let find = false;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);


    if (A[mid] == b) {
      find = true;
      break;
    } else if (A[mid] > b) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  if (find) answer--;
})

console.log(answer)