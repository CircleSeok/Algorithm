let input = require('fs').readFileSync(0).toString().trim().split("\n");

let N = parseInt(input[0]);
let tmp = input[1].split(" ").map(Number);
result = new Object();
resultPrint = "";

let arr = Array.from(new Set(tmp)).sort((a,b)=>a - b);

for(let i = 0 ; i<arr.length;i++){
  result[arr[i]]=i;
}

for(let val of tmp){
  resultPrint += result[val] + " ";
}

console.log(resultPrint)