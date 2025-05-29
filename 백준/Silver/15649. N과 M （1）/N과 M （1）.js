let fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let numbers = new Array(n).fill(0).map((v, i) => i+1);

let visited = new Array(n).fill(false);

let sequence = [];

function backtrack (depth) {

  if (depth == m) {
    console.log(sequence.join(" "))
    return;
  }

  for (let i=0; i<n; i++) {

    if (!visited[i]) {

      visited[i] = true;
      sequence.push(numbers[i]);

      backtrack(depth + 1);

      visited[i] = false;
      sequence.pop();
    }
  }
}

backtrack(0);