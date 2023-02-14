let s= 'abcde';
let s2='qwer';
// 길이가 짝수면 가운데 두 글자 반환

let newS= s.split('');
console.log(newS);

var answer = newS.length%2===0 ? 
[newS[newS.length/2],newS[newS.length/2+1]] 
: [newS[Math.floor(newS.length/2)]];
console.log(answer);