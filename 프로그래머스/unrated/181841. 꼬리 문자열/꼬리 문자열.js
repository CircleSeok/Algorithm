function solution(strList, ex) {
    let filteredList = strList.filter(str => !str.includes(ex));
    let tailString = filteredList.join('');
    return tailString;
}