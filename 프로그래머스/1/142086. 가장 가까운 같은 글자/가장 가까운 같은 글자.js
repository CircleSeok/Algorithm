function solution(s) {
    let result = []; 

    for (let i = 0; i < s.length; i++) {
        let foundIndex = -1; 

        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                foundIndex = i - j; 
                break;
            }
        }

        result.push(foundIndex); 
    }

    return result;
}