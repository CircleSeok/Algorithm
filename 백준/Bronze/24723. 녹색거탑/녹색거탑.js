const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const floor = Number(input)
console.log(2**floor)