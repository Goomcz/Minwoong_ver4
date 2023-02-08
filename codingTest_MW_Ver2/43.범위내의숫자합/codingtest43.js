// 두 정수 a,b가 주어졌을 때, 두 수 사이의 모든 정수의 합을 리턴
// a,b 가 같은 경우는 둘 중 아무 수나 리턴
// a,b 사이의 대소 관계는 정해져 있지 않음

let a=7;
let b=5;
var answer = 0;
let abArray = [a,b];

//console.log(abArray.sort((a,b) => a-b));
//console.log(Math.min(...abArray));
//console.log(Math.abs(b-a));
for(let i=0; i< Math.abs(a-b)+1; i++){
    answer += Math.min(...abArray) + i;
}
// 전개 연산사 활용한 것에 주목

console.log(answer);