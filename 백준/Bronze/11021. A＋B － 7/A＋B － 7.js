let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i=1;i<=input[0];i++) {
   let tmp = input[i].split(' ');
   console.log(`Case #${i}: ${Number(tmp[0])+Number(tmp[1])}`);
}