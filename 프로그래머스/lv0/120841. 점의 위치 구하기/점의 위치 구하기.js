function solution(dot) {
  const [x, y] = dot;
  if (y > 0) return x > 0 ? 1 : 2;
  return x < 0 ? 3 : 4;
}

function solution(dot) {
    if(dot[0]>0){
        if(dot[1]>0){
            return 1
        }else{
            return 4
        }
    }else{
        if(dot[1]>0){
            return 2
        } else {
            return 3
        }
    }
}



//x가 양수일때와 음수일때의 경우

// x y  => 1 v
// -x y => 2
// -x -y => 3
// x -y => 4 v