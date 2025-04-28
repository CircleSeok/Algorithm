const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let factorial = 1;

if(input === 0 || input === 1){
    console.log(1);
} else{
    for(let i = 1; i <= input; i++){
        factorial *= i;
    }
    
    console.log(factorial);
}