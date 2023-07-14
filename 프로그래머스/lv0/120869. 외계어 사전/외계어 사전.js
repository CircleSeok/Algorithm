function solution(spell, dic) {
    const ans = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((el) => {
            if(word.includes(el)){
                count += 1;
            }
        })
        
        if(count === spell.length){
            ans.push(word);
        }
    })
    
    return ans.length === 0 ? 2 : 1;
}