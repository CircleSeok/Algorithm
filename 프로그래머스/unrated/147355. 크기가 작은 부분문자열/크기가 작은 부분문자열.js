function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const substring = t.substring(i, i + p.length);
    const num1 = parseInt(substring);
    const num2 = parseInt(p);

    if (num1 <= num2) {
      count++;
    }
  }

  return count;
}