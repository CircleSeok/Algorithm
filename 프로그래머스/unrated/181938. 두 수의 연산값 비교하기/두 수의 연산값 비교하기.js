function solution(a, b) {
  let Sum = String(a) + String(b); 
  console.log(Sum);

  let Mul = 2 * a * b;
  console.log(Mul);

  if (Sum > Mul) {
    return Number(Sum);
  } else {
    return Mul;
  }
}
