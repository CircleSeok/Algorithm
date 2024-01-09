function solution(numList, n) {
    
    let beforeN = numList.slice(0, n);
    let afterN = numList.slice(n);

    
     let result = afterN.concat(beforeN);
    return result;
}