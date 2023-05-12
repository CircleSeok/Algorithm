function solution(array) {
    let arrayCnt = 0;
        let newArray = [];
    while(arrayCnt < array.length){
        let minNum  = 1000;
    
        
        let cnt = 0 ;
        while(cnt < array.length){
            if(minNum > array[cnt]){
               minNum = array[cnt];
               }
            cnt = cnt + 1;
        }
        
        newArray.push(minNum);
        
        let cnt2 = 0;
        while(cnt2 < array.length){
            if(minNum === array[cnt2]){
                array[cnt2] = 1000;
                break
            }
            cnt2 = cnt2 + 1
        }
        
        arrayCnt = arrayCnt + 1;
    }
    return newArray[Math.floor(newArray.length/2)]
  
    }

//배열 - 제일 작은 값을 찾는다
//찾으면 새 배열에 넣기
//원래 배열에서 찾은 값 삭제
//만약 원래 배열의 길이만큼 반복했으면 끝낸다. 아니면 처음으로 돌아간다.

//가운데 값 꺼내기