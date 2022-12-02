function solution(array, height) {
    let result = array.filter(x => x > height).length;
    return result
}

//filter() 배열에만 사용할수있다.
//height 보다 큰녀석들을 배열로 만들어준다
// 그리고 .length 를 붙혀 그 수를 구한다.

function solution(array, height) {
    let answer = [];
    for(let i = 0; i < array.length; i ++){
        if(array[i] > height){
            answer.push(i);
        }
    }
    return answer.length;
}


function solution(array, height) {
  let count = 0
  for(let i = 0; i < array.length; i++) {
      if(array[i] >height) {
          count ++
      }
  }
     return count
}

function solution(array, height) {
    let count = 0;

    for (i of array) {
        if (i > height) count ++       
    }
    return count;
}

function solution(array, height) {
    let count = 0
    for (x in array) {
        let sum = array[x]
        if(array[x] > height) {
            count++
        }
    }
    return count
}

function solution(array, height) {
    let count = 0
    for (x of array) {
        let sum = x
        if(x > height) {
            count++
        }
    }
    return count
}