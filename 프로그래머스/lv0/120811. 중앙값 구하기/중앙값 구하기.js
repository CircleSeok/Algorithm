function solution(array) {
  // 배열 길이 중 중앙값 (중간 index) 찾기
  const mid_num = Math.floor(array.length / 2);

  // 오름차순으로 정렬하기 - sort() 메서드 사용
  const asc_array = array.sort((a, b) => a - b);

  // 오름차순된 새로운 배열 중 중간 index 반환하기
  return asc_array[mid_num];
}

//배열 - 제일 작은 값을 찾는다
//찾으면 새 배열에 넣기
//원래 배열에서 삭제
//원래 배열의 길이만큼 반복