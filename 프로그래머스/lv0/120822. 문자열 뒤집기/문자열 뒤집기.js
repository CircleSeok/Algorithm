function solution(my_string) {
    return my_string.split("").reverse().join("")
}

// JS 동작을 줄수있는데 0 ~ 4번째까지 한 글자씩 보여줘!

// 문자열을 배열로 바꾸는법
// 배열 매소드 split() 안에있는 값으로 나눠서 배열로 배출
// 배열 메소드 join() 배열을 안에있는 문자열로 합쳐준다

//배열 매소드 arr.reverse() 1번에 뒤집을수 있다.
// for(let i = my_string.length -1; i <= 0;  i--){
// let answer = ''
// answer += my_string(i)
//}

// 문자열 => 배열 => 문자열
// 숫자형 => 문자형 => 숫자형
// 객체 배열 숫자 함수