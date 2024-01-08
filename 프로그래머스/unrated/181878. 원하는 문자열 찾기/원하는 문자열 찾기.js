function solution(myString, pat) {
    let lowerCaseString = myString.toLowerCase();
    let lowerCasePat = pat.toLowerCase();

    for (let i = 0; i <= lowerCaseString.length - lowerCasePat.length; i++) {
        const substring = lowerCaseString.substring(i, i + lowerCasePat.length);
        if (substring === lowerCasePat) {
            return 1; 
        }
    }
    return 0; 
}