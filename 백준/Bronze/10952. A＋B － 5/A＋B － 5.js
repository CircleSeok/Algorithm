let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i = 0;
let ans = '';

while(input[i] != '0 0') {
   let nums = input[i].split(' ');
   ans += Number(nums[0]) + Number(nums[1]) + '\n';
   i += 1;
}
console.log(ans);