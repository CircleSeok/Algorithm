function solution(my_string, n) {
    return my_string.split('').map(el => el.repeat(n)).join('')
}


//문자열 1글자씩 때서 n 번만큼 반복 해서 출력해줘
        //반복문
// 1. 문자열 += (복잡.)

// 2. 문자열 split()=> 배열  map() => 문자열 join()