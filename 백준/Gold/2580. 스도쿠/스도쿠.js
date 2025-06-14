  let fs = require("fs");
    let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    input = input.map(v => v.split(' ').map(e => parseInt(e)));

    let zero = [];

    function Find() {
        for (let i = 0; i < input[0].length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (input[i][j] == 0) {
                    zero.push([i, j]);
                }
            }
        }
    }
    Find();

    function DFS(Index) {
        if (Index === zero.length) {
            console.log(input.map(v => v.join(' ')).join('\n'));
          
            process.exit();
        }
        let zeroX = zero[Index][0];
        let zeroY = zero[Index][1];
      
        for (let i = 1; i < 10; i++) {
          
            if (Check(zeroX, zeroY, i)) {
              
                input[zeroX][zeroY] = i;
             
                DFS(Index + 1);
              	
                input[zeroX][zeroY] = 0;
            }
        }
    }

    function Check(x, y, value) {
      
        for (let i = 0; i < input.length; i++) {
            if (input[i][y] === value || input[x][i] === value) return false;
        }
        let boxX = Math.floor(x / 3) * 3;
        let boxY = Math.floor(y / 3) * 3;
      
        for (let i = boxX; i < boxX +3; i++) {
            for (let j = boxY; j < boxY + 3; j++) {
                if (input[i][j] === value) {
                    return false;
                }
            }
        }
        return true;
    }

    DFS(0);