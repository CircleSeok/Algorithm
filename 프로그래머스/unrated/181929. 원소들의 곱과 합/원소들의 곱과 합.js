function solution(num_list) {
let Mul = num_list.reduce((acc, num) => acc * num)
let Sum = num_list.reduce((acc, num) => acc + num)
let Pow = Math.pow(Sum, 2)
if(Mul < Pow) {
    return 1
} else {
    return 0
}
}