function solution(participant, completion) {
    var answer = '';
    
    var map = new Map();
    
    // 참가자 이름별 등장 횟수 저장
    for(var i=0; i<participant.length; i++){
        if(map.get(participant[i])===undefined){
            map.set(participant[i],1);
        }
        else{
            map.set(participant[i],map.get(participant[i])+1);
        }
    }
    
    // 완주자 이름 수 만큼 개수 차감
    for(var i=0;i<completion.length;i++){
        map.set(completion[i], map.get(completion[i])-1);
    }
    
  
    for (var [name,count] of map){
        if (count > 0) {
        answer = name;
        break;
        }
    }
    
    return answer;
}