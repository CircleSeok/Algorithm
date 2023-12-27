function solution(arr) {
  let X = [];
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (let j = 0; j < a; j++) {
      X.push(a);
    }
  }
  return X;
}