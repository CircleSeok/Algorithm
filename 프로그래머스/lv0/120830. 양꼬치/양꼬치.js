function solution(n, k) {
    var answer = (n * 12000) + ((k * 2000) - (Math.floor(n/10) * 2000))
    return answer;
}

// 1n = 12000
// 1k = 2000

// 10n = 1k가 서비스

// (n * 12000) + (k * 2000) - (n/10 * 2000

//양꼬치를계산돈 + 음료수 계산돈 - 서비스로 받은 음료수