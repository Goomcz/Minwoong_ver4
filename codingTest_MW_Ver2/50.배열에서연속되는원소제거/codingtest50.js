// [1, 1, 3, 3, 0, 1, 1] -> [1, 3, 0, 1] 
// 배열에서 연속되는 숫자는 하나만 남기고 제거하기

let arr = [1, 1, 3, 3, 0, 1, 1];

/*var answer;
answer= new Set(rr);
console.log(answer);
new Set(arr) > 중복되는 요소 모두 지우기
*/

let newArr = arr.reduce((acc,cur,i)=>{
    if(arr[i]!==arr[i-1]){
        acc.push(cur);
    }
    return acc;
},[]);

console.log(newArr);