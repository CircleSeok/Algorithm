function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}

// [1, 2, 3, 4, 5]

// sort 쓰면 스트링 순으로 반환 해줌

// ((a,b)=>b-a)  하면 -로 나와서 큰수 부터나온다.
// ((a,b)=>a-b) 하면 작은순서대로 나온다.