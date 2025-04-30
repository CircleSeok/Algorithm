const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [t, ...arr] = input;

function solution(n, r) {
  let answer;
  let dy = Array.from(Array(30), () => Array(30).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (r === 0 || n === r) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);
  console.log(answer);
}
arr.forEach((i) => solution(+i.split(' ')[1], +i.split(' ')[0]));