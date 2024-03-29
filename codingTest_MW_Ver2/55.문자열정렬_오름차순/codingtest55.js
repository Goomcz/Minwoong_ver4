// ["abce", "abcd", "cdx"] , n = 2
// 각 원소들의 n index를 기준으로 오름 차순 정렬하라
// 단, 같다면 사전 순으로 정렬하라
// 모든 알파벳은 소문자이다.

let String  = ['abae', 'dbbd', 'cdcs'];
let n = 2;

let newString = String.sort(); // 1. 일단 사전 순으로 정렬
console.log(newString);
let stringMap = new Map();
String.map((val,index) =>{
    stringMap.set(index,val[n])
});
console.log(stringMap);
// 2. Map 객체 만들기까지 ok
// let newstringMap = new Map([...stringMap.entries()].sort((a,b)=> a[1]-b[1]));
// 오개념! : sort()는 문자열 정렬/ a-b ~ 형태는 숫자 정렬임

let newstringMap = new Map([...stringMap].sort((a,b) => 
{if(a[1].charCodeAt()-b[1].charCodeAt() < 0){
    return -1;
} else 1;
})); 
// 3. Map 객체 sort by value 완료
// 전개 연산자 필수 
// 이 알고리즘이 이해가 안됨

console.log(newstringMap);
console.log(newstringMap.keys());

