function solution(n) {
    var answer = -1;
    let i = 1;
    while(i++){
        if(n%i === 1){
            answer = i;
            return answer; 
        } else if(n%i ===2){
            answer = i;
            return answer;
        }
    }
}
console.log(solution(12));