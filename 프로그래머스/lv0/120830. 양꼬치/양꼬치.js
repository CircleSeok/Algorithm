function solution(n, k) {
   
let lamb = 12000
let drink = 2000
    
    if(n >= 10) {

        k-=(n/10 << 0)
    }
    return n*lamb + drink*k
}
