function solution(myString, isPrefix) {

    for (let i = 0; i < myString.length; i++) {
        const currentPrefix = myString.slice(0, i + 1);
        if (currentPrefix === isPrefix) {
            return 1; 
        }
    }

    return 0; 
}