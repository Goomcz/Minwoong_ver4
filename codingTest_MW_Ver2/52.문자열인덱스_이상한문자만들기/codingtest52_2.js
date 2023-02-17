// 하나 이상의 공백으로 분리된 문자열에서
// 각 문자의 짝수 인덱스 글자를 대문자로, 홀수는 소문자로 리턴하는 함수

let s = 'try    hello  world';
// "TrY HeLlO WoRlD"


/*var answer = s.split(' ').map(i=> i.split('').map((j,key) => key%2===0? j.toUpperCase() : j.toLowerCase()).join('').join(' '));

console.log(answer);
*/

var answer = s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ');
console.log(answer);

// map().map() 이 아니라, map(  ~~~.map()~~) 구조여야 이중 map 실행됨