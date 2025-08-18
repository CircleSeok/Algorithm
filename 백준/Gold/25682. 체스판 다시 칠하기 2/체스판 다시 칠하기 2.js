const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const board = input.slice(1).map(line => line.trim().split(""));

// mismatch 배열 생성
const mismatchW = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
const mismatchB = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    const expectedW = (i + j) % 2 === 0 ? "W" : "B"; // 왼쪽 위 W 시작
    const expectedB = (i + j) % 2 === 0 ? "B" : "W"; // 왼쪽 위 B 시작
    mismatchW[i][j] = (board[i - 1][j - 1] !== expectedW ? 1 : 0);
    mismatchB[i][j] = (board[i - 1][j - 1] !== expectedB ? 1 : 0);
  }
}

// prefix sum 생성
function buildPrefixSum(arr) {
  const ps = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      ps[i][j] = arr[i][j] + ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1];
    }
  }
  return ps;
}

const psW = buildPrefixSum(mismatchW);
const psB = buildPrefixSum(mismatchB);

// 구간 합 계산 함수
function getSum(ps, x1, y1, x2, y2) {
  return ps[x2][y2] - ps[x1 - 1][y2] - ps[x2][y1 - 1] + ps[x1 - 1][y1 - 1];
}

let answer = Infinity;

// 모든 K×K 구간 탐색
for (let i = K; i <= N; i++) {
  for (let j = K; j <= M; j++) {
    const x1 = i - K + 1, y1 = j - K + 1;
    const x2 = i, y2 = j;
    const repaintW = getSum(psW, x1, y1, x2, y2);
    const repaintB = getSum(psB, x1, y1, x2, y2);
    answer = Math.min(answer, repaintW, repaintB);
  }
}

console.log(answer);