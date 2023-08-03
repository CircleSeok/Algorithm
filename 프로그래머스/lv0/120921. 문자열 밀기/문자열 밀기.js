function solution(A, B) {
    function canCircularShift(a, b) {
    // 문자열 A를 오른쪽으로 순환하여 B를 얻을 수 있는지 확인
    return (a + a).includes(b);
  }

  function countCircularShifts(a, b) {
    // 문자열 A를 오른쪽으로 밀어서 B가 될 수 있는지 확인
    if (!canCircularShift(a, b)) {
      return -1;
    }

    // 문자열 A를 순환시키면서 B가 될 때까지 몇 번의 순환 동작이 필요한지 계산
    let count = 0;
    while (a !== b) {
      a = a[a.length - 1] + a.slice(0, -1); // 문자열을 오른쪽으로 한 칸씩 밀기
      count++;
    }
    return count;
  }

  return countCircularShifts(A, B);
}