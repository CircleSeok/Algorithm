const input = require("fs").readFileSync(0, "utf-8").trim();

const object = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

const arr = input.split("");
let result = 0;

for (let key in object) {
  for (let i = 0; i < arr.length; i++) {
    if (key.includes(arr[i])) {
      result += object[key];
    }
  }
}

console.log(result);