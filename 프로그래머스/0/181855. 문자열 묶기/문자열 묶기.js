function solution(strArr) {
  strArr.sort((a, b) => a.length - b.length);
  const groups = strArr.reduce((acc, cur) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup[0].length === cur.length) {
      lastGroup.push(cur);
    } else {
      acc.push([cur]);
    }
    return acc;
  }, []);
  const groupCounts = groups.map((group) => group.length);
  return Math.max(...groupCounts);
}