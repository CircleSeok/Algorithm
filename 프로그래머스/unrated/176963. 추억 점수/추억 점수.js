function solution(name, yearning, photo) {
    const nameToYearning = {};
    for (let i = 0; i < name.length; i++) {
        nameToYearning[name[i]] = yearning[i];
    }
    
    const result = [];
    for (let i = 0; i < photo.length; i++) {
        let totalYearning = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if (nameToYearning[photo[i][j]]) {
                totalYearning += nameToYearning[photo[i][j]];
            }
        }
        result.push(totalYearning);
    }
    
    return result;
}