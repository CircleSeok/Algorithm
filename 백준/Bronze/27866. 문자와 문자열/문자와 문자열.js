const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const S = input[0];
const N = +input[1];
console.log(S[N - 1]);