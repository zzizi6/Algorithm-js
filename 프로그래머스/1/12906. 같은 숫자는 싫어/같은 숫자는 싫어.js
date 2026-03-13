function solution(arr) {
  var answer = [];

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  answer.push(arr[0]);

  for (var i = 1; i < arr.length; i++) {
    var top=answer.pop();
    if (top !== arr[i]) {
      answer.push(top);
      answer.push(arr[i]);
    }
    else {
      answer.push(top);
    }
  }

  return answer;
}