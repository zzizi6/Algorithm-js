function solution(priorities, location) {
  var answer = 1;

  var queue = [];

  for (var i = 0; i < priorities.length; i++) {
    // queue 안에 [index, 우선순위] 형태로 추가
    queue.push([i, priorities[i]]);
  }

  while (true) {
    // 최댓값 구하기
    var max = Math.max(...queue.map((item) => item[1]));

    // 제일 아래값 빼기
    var val = queue.shift();

    // 현재 값이 최댓값이고 현재 값이 내가 원하는 location 값일때
    if (val[1] == max && val[0] == location) {
      break;
    }

    // 현재 값이 최댓값일때
    else if (val[1] == max) {
      answer++;
    }

    // 현재 값이 최댓값이 아닐때
    else {
      // 현재 값을 뒤로 보냄
      queue.push(val);
    }
  }

  return answer;
}
