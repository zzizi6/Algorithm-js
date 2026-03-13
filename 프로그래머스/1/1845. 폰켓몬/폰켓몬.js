
function solution(nums) {
  // nums: number[]
  // return: number (선택할 수 있는 서로 다른 폰켓몬 종류 수의 최댓값)
  var answer = 0;

  var map = new Map();

  for (var p of nums) {
    // map에 존재하지 않으면 넣음. 이미 있는 경우 패스 (종류만 거름)
    if (map.get(p) === undefined) {
      map.set(p, 1);
    }
  }

  // 종류수와 n/2 비교 후 최솟값을 answer에 저장
  if (map.size > nums.length / 2) {
    answer = nums.length / 2;
  } else {
    answer = map.size;
  }

  return answer;
}

