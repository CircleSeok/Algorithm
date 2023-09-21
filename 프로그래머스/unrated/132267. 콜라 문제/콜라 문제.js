function solution(a, b, n) {
    let totalColas = 0;  // 상빈이가 받을 수 있는 전체 콜라 수 초기화
    let remainingBottles = n;  // 현재 가지고 있는 빈 병 수 초기화

    while (remainingBottles >= a) {  // 빈 병이 a개 이상일 때까지 반복
        // 빈 병을 마트에 가져가서 콜라를 받음
        const colasReceived = Math.floor(remainingBottles / a) * b;
        totalColas += colasReceived;  // 받은 콜라를 전체 콜라 수에 더함
        remainingBottles = colasReceived + (remainingBottles % a);  // 가져다주고 남은 빈 병 수 업데이트
    }

    return totalColas;
}