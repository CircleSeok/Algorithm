function solution(polynomial) {

    let answer = ["",0];
    let varX = 0;
    let arr = polynomial.split("+ ").map(el => el.trim());

    
    for(let i = 0; i< arr.length; i++){
  
        if(!arr[i].includes("x")){
            arr[i] = Number(arr[i]);
            answer[1] += arr[i]
        }
        
     
        else if (arr[i] ==="x"){
            varX++;
        }
   
        else {
            let tmp = Number(arr[i].split("x")[0]);
            varX += tmp;          
        }
    }
    
  
    varX === 1 ? answer[0] = "x" : answer[0] = varX+"x";
    
 
    if(answer[0] === "0x") return String(answer[1]);   
    
   
    if(answer[1] === 0) return answer[0];
    
   
    if(answer[0] === "" && answer[1] === 0) return "0";
    
    else return answer.join(" + ")
}