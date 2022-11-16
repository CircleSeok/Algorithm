function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}

function solution(numbers) {
    let mx1 = 0
    let mx2 = 0
    let idx = 0
    mx1 = Math.max(...numbers) //number = [1,2,3,4,5] mx1 =5
    idx = numbers.indexOf(mx1) //mx1의 인덱스부터 1개를 지운다 number =[1,2,3,4]
    numbers.splice(idx,1) // mx2 = 4
    mx2 = Math.max(...numbers) //5 * 4
    return mx1 * mx2
}

// [1, 2, 3, 4, 5]

// sort 쓰면 스트링 순으로 반환 해줌

// ((a,b)=>b-a) 하면 내림차순
// ((a,b)=>a-b) 하면 오름차순