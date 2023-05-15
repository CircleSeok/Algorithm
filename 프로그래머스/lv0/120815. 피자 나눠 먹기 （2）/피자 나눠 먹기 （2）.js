function solution(n) { 
let pizzaCount = 1;
    while(true) {
        if(pizzaCount * 6 % n === 0) {
            return pizzaCount;
        }
           pizzaCount = pizzaCount + 1
    }
    
}

//계속 커지는 숫자를 만듬
//2 숫자 % === 0 이면 정답.