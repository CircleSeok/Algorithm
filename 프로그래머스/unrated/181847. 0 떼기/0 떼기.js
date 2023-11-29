function solution(n_str) {
 const digits = n_str.split('');

  
    let startIndex = 0;
    while (startIndex < digits.length && digits[startIndex] === '0') {
        startIndex++;
    }


    return digits.slice(startIndex).join('');
}