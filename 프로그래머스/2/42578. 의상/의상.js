function solution(clothes) {
  var answer = 0;
  answer = 1;

  var map = new Map();

  // [옷의 종류, 옷의 개수] 해시 맵 생성

  for (var c of clothes) {
    if (map.get(c[1]) === undefined) {
      map.set(c[1], 1);
    } else {
      map.set(c[1], map.get(c[1]) + 1);
    }
  }

  // 옷 종류별 개수 +1 한 값을 모두 곱함
  for (var c2 of map.values()) {
    answer *= c2 + 1;
  }

  // 모든 옷을 입지 않은 경우의 수를 빼고 반환
  return answer - 1;
}