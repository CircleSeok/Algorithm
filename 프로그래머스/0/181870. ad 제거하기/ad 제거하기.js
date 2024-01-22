function solution(strArr) {
  
    let result = strArr.filter(str => !str.includes("ad"));
    
    return result;
}