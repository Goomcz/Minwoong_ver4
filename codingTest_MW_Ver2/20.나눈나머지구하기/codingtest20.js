function solution(n) {
    var answer = '';
    for(let i=1; i<=n; i++){
        if(n%i ===1){
            answer = '엥';
            return answer;       
        } else if(n%i ===0){
            answer = '우엥';
            return answer;
        }
    }
}
console.log(solution(4));