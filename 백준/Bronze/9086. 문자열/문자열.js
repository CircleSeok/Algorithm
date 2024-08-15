const input = require('fs')
        .readFileSync('./dev/stdin')
        .toString()
        .trim()
        .split('\n')
        .map((v) => v.trim());
const N = +input[0];
const answer = [];

for (let i = 1; i <= N; i++) {
        answer.push(input[i][0] + input[i][input[i].length - 1]);
}

console.log(answer.join('\n'));