const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    const str = input[0];

  
    const convertedString = str
        .split('')
        .map(char => {
            if (char.toUpperCase() === char) {
                return char.toLowerCase();
            } else {
                return char.toUpperCase();
            }
        })
        .join('');

    console.log(convertedString);
});