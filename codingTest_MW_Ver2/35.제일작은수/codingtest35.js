// 제일 작은수를 제거한 후의 배열 리턴
let arr2= [4, 3, 2, 1]
// [4, 3, 2]
let arr = [10];
// [-1] 빈 배열이면 -1 채워서 리턴
/*console.log(arr.indexOf(3));
let newArr = arr.splice(3,1);
console.log(newArr);
console.log(arr);
splice에 대한 오해! : 잘라진 배열을 리턴해준다. 변경해주는게 아니라(slice랑 걍 똑같네)*/
// 

if(arr.length!==1){
let newArr = arr.splice(arr.indexOf(Math.min(...arr)),1);
var answer = arr;} else {
    var answer = [-1];
}
console.log(answer);

