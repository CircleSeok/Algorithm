let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


let [n, k] = input.map(Number);
let start = 1;
let end = n * n;
let result = 0;


while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let count = 0;
  for (let i=1; i<=n; i++) {
    count += Math.min(parseInt(mid / i), n);
  }


  if (count >= k) {
    result = mid;
    end = mid - 1;
  }
  else start = mid + 1;
}
console.log(result)