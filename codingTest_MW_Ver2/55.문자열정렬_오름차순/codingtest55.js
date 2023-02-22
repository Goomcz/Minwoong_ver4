// ["abce", "abcd", "cdx"] , n = 2
// 각 원소들의 n index를 기준으로 오름 차순 정렬하라
// 단, 같다면 사전 순으로 정렬하라
// 모든 알파벳은 소문자이다.

let String  = ['abce', 'dbad', 'cdx'];
let n = 2;

let newString = String.sort();
console.log(newString);
// 1. 여기까지 ok
let stringMap = new Map();
String.map((val,index) =>{
    stringMap.set(index,val[n])
});
console.log(stringMap);
// 2. Map 객체 만들기까지 ok
let newstringMap = new Map([...stringMap.entries()].sort((a,b)=> a[1]-b[1]));
console.log(newstringMap);
// let newstringMap = new Map([...stringMap].sort((a,b) => a[1]-b[1])); // 전개 연산자 필수 
//console.log(newstringMap);