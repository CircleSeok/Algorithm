function solution(num_list) {

if(num_list.length >= 11) {
    let Sum = num_list.reduce((acc,cur) => {
        return acc + cur
    })
    return Sum
} else if(num_list.length <= 10) {
    let Mul = num_list.reduce((acc, cur) => {
        return acc * cur
    })
    return Mul
}
}