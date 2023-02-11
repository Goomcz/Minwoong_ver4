
// 문자를 큰 것부터 작은 것으로 정렬해라
// 대문자는 소문자 보다 작다
// ex) gfedcbZ 
// b c d e f e Z
// 나중에 나오는 알파벳이 큰 알파벳임

let s = 'Zbcdefg';
var answer= [];
console.log(s.charCodeAt(0));

console.log(s.length);

for(let i=0; i<s.length; i++){
    answer.unshift(s.charCodeAt(i));
}

console.log(answer);

answer.sort((a,b)=>{
    return a-b
});

console.log(answer);

