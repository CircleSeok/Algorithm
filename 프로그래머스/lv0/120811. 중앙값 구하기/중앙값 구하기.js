function solution(array) {
   
    
    let arrayI = 0;
    let newArray = []
    while(arrayI < array.length) {
            let minNum = 1000;
    let i = 0;
    
    while(i< array.length){
        if(minNum > array[i]){
            minNum = array[i];
        }
        i = i +1
    }
    // minNum = 최소값
    newArray.push(minNum)
    
    let i2 = 0;
    while(i2< array.length){
        if(minNum === array[i2]) {
         array[i2] = 1000;
            break;
        }
        i2= i2 + 1
    }
        arrayI = arrayI + 1
    }
    return newArray[Math.floor(array.length/2)]
    console.log('newArray', newArray);
}

//정렬
//배열에서 제일 작은 값을 찾는다
//찾으면 새 배열에 넣기
//원래 배열에 찾은 값은 지운다.
//만약 원래 배열 길이만큼 반복했으면 끝낸다. 아니면 배열중 가장 작은 값을 찾는다로 반복
//가운데 값 꺼내기
//배열길이 [Math.floor(n/2)]



