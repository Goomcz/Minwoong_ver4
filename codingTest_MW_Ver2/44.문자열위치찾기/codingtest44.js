/* 
String형 배열에서 'Kim'의 index를 return 하는 함수 작성하기

1. Kim 은 배열에서 하나만 있으며 반드시 있다.
2. '김서방은 x에 있다' 라는 문자열이 return 되어야 함
*/

let seoul = ['Jane','Kim','Min','Im','You','Lee','Park'];
let x = seoul.indexOf('Kim');
var answer = '김서방은 ' + x + '에 있다';
console.log(answer);