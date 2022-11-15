function solution(array, height) {
    let result = array.filter(x => x > height).length;
    return result
}


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

    for (a of array) {
        if (a > height) count += 1;       
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