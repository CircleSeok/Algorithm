function solution(num_list) {
    
    let Zak = num_list.filter(x => x % 2 === 0).length;
    let hol = num_list.length - Zak
    return [Zak, hol]
}