function solution(keyinput, board) {
  	// 1. x,y 좌표를 선언한다.
    let x = 0;
    let y = 0;
    
  	// 2. board의 범위도 설정한다. 
    const range = 
          [ Math.abs( Math.floor(board[0] / 2) ), 
           Math.abs( Math.floor(board[1] / 2) ) ];
    
  	// 3. keyinput에 방향이 입력된다면 그에 맞게 x 또는 y 좌표를 변경한다.
    for(let k of keyinput){
        switch(k){
            case "left": x--; break;
            case "right": x++; break;
            case "down": y--; break;
            case "up": y++; break;
        }
        
      	// 4. x와 y의 값이 설정 범위를 넘어간다면 설정된 범위의 최댓값을 대입한다.
        if(Math.abs(x)>range[0]){
            x = x > 0 ? range[0] : range[0] * -1;
         }
        if(Math.abs(y)>range[1]){
            y = y > 0 ? range[1] : range[1] * -1;
        }
        
    }
    return [x,y];
}

function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}