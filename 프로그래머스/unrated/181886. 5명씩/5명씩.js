function solution(names) {
   let result = [ ];
    for(let i = 0; i<names.length; i+=5){
        let group = names.slice(i, i+5);
        result.push(group[0])
    }
    return result;
}


// 다섯개씩 잘라서 그 인덱스 0번째 반환