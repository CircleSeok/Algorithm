function solution(my_string) {
    let result = 0;
    
    for(let i = 0; i < my_string.length; i++){
        let SUM = 0;
        while(!Number.isNaN(Number(my_string[i]))){
            SUM += my_string[i];
         
            i++;
        }
        result += Number(SUM);
        console.log(result);
    }
    
    return result;
}