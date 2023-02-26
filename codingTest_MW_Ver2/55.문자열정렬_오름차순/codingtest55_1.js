// ["abce", "abcd", "cdx"]  n = 2
// 각 원소들의 n index를 기준으로 오름 차순 정렬하라
// 단, 같다면 사전 순으로 정렬하라
// 모든 알파벳은 소문자이다.

let String  = ["abce", "abcd", "cdx"];
let n = 2;
// 1. 미리 사전 순으로 정렬해 놓는 것이 포인트
var answer= String.sort().sort((a,b)=>{
    if(a[n].charCodeAt() - b[n].charCodeAt() > 0){
        return 1; // 2. 오름차순 정렬이므로, a의 아스키 코드 값이 더 큰 경우, 1을 반환하여 
                // "위치를 바꾼다" 가 아니라, a를 b의 뒤로 오게 한다
    } else if(a[n].charCodeAt() - b[n].charCodeAt() === 0){
        return 0;  // 3. 미리 사전순으로 정렬했으므로, a와 b의 아스키 코드 값이 같은 경우 , 
                   // 0을 반환하여 위치 고정
    }              // 이 코드가 핵심임!

    else return -1; // 4. a가 b보다 아스키 코드 값이 더 작은 경우, -1를 반환하여,
                    // "위치를 바꾸지 않는다"가 아니라 a를 b의 앞에 오게 한다
                    // 이 대목에서 헷갈릴 수가 있음.
                    //  이미 a-> b 순서대로 정렬되어 있다고 착각하면 안됨
                    // 이 function을 통해서 비로소 정렬이 되는 것임!
});

console.log(answer);

/*let testString = ['abcf','abcd','abce'];
console.log(testString);
testString.sort();
console.log(testString);
console.log(testString[0].charCodeAt());
console.log(testString[1].charCodeAt());
console.log(testString[2].charCodeAt());
*/
console.log("김경태 전세 사기 개꿀");