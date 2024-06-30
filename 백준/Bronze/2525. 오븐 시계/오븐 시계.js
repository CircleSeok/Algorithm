const fs = require("fs");
let inputData = fs.readFileSync('/dev/stdin').toString().split("\n");
 
let [curHour, curMin] = inputData[0].split(" ").map(Number);
let cookTime = +inputData[1];
 
curMin += cookTime;

while (curMin >= 60){
    curMin -= 60;
    curHour += 1;
}

curHour %= 24;

console.log(curHour, curMin);
