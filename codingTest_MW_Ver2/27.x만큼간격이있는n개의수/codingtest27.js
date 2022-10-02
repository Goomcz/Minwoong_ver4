let x = 2;
let n = 5;

let y = x;
// 2,4,6,8,10
var answer = [];
while(answer.length!==n){
    answer.push(x);
    x=x+y;
}
console.log(answer);