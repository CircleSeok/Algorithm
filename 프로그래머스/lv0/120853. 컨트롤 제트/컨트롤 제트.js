function solution(s) {
    let array = s.split(' ')
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'Z'){
            if(array[i-1]){
                array.splice(i-1, 2);
                i -= 2;
            }
            else{
                array.splice(i,1)
                i--; 
            }
        }
    }
    return array.reduce((a,b) => a*1+b*1, 0);
}