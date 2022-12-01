function solution(angle) {
    if (0 < angle && angle < 90) {
        return 1
    } else if (angle === 90) {
        return 2
    } else if (90 < angle && angle < 180) {
        return 3
    } else if (angle === 180) {
        return 4
    }
}

// 90 < x < 180 같은거 할때
// && 써줘야함

function solution(angle) {
return angle < 90 ? 1 : angle === 90? 2 : angle < 180 ? 3 :4;
}