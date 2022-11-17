function solution(slice, n) {
    return Math.ceil(n / slice)
}

function solution(slice, n) {
    let i = 1;
    while(slice * i < n){
        i++
    } return i;
}

function solution(slice, n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
            if (i % slice === 0) {
                answer ++
        }
    }
    return answer;
}

function solution(slice, n) {
    let pizzas = 0
    for (let i = 0; i < n; i++) {
        if (i % slice == 0) {
            pizzas++
        }
    }
    return pizzas
}

