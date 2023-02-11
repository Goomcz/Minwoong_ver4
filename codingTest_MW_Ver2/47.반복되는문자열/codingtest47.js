// n=3 ? 수박수
// n=4 ? 수박수박 

let n = 30;

var answer = '';

for(let i=1; i<=n; i++){
    i%2!==0 ? answer += '수' : answer += '박';
}

console.log(answer);

// substring 함수, repeat 함수 공부할 것