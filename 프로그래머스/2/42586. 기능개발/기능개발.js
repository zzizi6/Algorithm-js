function solution(progresses, speeds) {
  var answer = [];

  var days = [];
  var top = 0;
  var target = 0;
  var count = 0;

  // 작업별 소요 시간 계산 배열 만듦
  for (var i = progresses.length - 1; i >= 0; i--) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  // 배열 돌면서 기준 값보다 작은 값들은 다 뺌. (=큰 값 나오기전까지 반복)
  // days 반복문 순회
  while (1) {
    // 가장 윗 부분 값 꺼냄
    top = days.pop();

    // 카운트 초기화
    count = 1;

    // 타겟 값 비교 반복문
    while (true) {
      // 타겟 값 꺼냄

      // days 배열이 비어있으면 카운트 추가하고 반복문 종료
      if (days.length == 0) {
        answer.push(count);
        break;
      }
    
      else {
        target = days.pop();

        // 타겟 값과 비교해서 타겟값이 더 작으면 카운트 증가
        if (top >= target) {
          count++;
        }

        // 타겟값이 더 크면 정답 스택에 count 값 추가하고 반복문 종료
        else {
          answer.push(count);
          days.push(target);
          break;
        }
      }
    }

    // days 배열이 비어있으면 반복문 종료
    if (days.length == 0) {
      break;
    }
  }

  return answer;
}