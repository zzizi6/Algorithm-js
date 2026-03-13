/**
 * 프로그래머스 12909 - 올바른 괄호
 *
 * 문제 요약
 * - 문자열 s는 '(' 또는 ')' 로만 이루어져 있다.
 * - 괄호가 올바르게 짝지어져 있으면 true, 아니면 false를 반환한다.
 *   예) "()()", "(())()"  -> true
 *       ")()(", "(()("    -> false
 *
 * 제약
 * - 1 <= s.length <= 100000
 * - s[i] ∈ { '(', ')' }
 *
 * 실행(로컬)
 * - node src/run-pg.js problems/pg-12909.js --args '["()()"]'
 */
function solution(s) {
  var answer = true;

  // 문자열을 배열로 전환
  var str = s.split('');

  var stack = [];

  // 배열 돌면서 괄호 체크
  for (var s of str) {
    if (s=='(') {
      stack.push(s);
    }

    // 닫는 괄호 나오면 스택에서 꺼냄
    else if (s==')') {
      // stack 사이즈가 0이면 false
      if (stack.length == 0) {
       return false;
      } else {
        stack.pop();
      }
    }
  }

  // 남아있는 '(' 가 있으면 false
  if(stack.length!=0){
    return false;
  }

  return answer;
}

module.exports = { solution };
