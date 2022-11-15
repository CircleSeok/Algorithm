function solution(num_list) {
    
    let Zak = num_list.filter(x => x % 2 === 0).length;
    let hol = num_list.length - Zak
    return [Zak, hol]
}

function solution(num_list) {
        let answer = [0, 0]
    for(i = 0; i < num_list.length; i++ ){
        if(num_list[i] % 2 === 0 ){
            answer[0]++ 
        }else{
            answer[1]++
        }
    }
    return answer
}

function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}

function solution(num_list,countA=0,countB=0,answer = []) {

    for(let i of num_list)
        {
            i%2 === 0 ? countA++ : countB++
        }
    return [countA,countB];
}

function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}