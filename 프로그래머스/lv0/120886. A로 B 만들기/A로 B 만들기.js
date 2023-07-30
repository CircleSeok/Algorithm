function solution(before, after) {
   if (before.length !== after.length) {
        return 0;
    }
    const beforeCount = {};
    const afterCount = {};
    
    for (const char of before) {
        beforeCount[char] = (beforeCount[char] || 0) + 1;
    }

    for (const char of after) {
        afterCount[char] = (afterCount[char] || 0) + 1;
    }

  
    for (const char in afterCount) {
        if (!beforeCount[char] || beforeCount[char] < afterCount[char]) {
            return 0;
        }
    }


    return 1;
}