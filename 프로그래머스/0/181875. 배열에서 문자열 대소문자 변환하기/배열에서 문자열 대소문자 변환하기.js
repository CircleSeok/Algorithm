function solution(strArr) {
    const Arr = strArr.map((str, index) => {
        if (index % 2 === 0) {
            return str.toLowerCase();
        } else {
            return str.toUpperCase();
        }
    });

    return Arr;
}