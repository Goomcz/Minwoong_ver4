// First
/*let arr = [1,2,3,4];
let n = arr.length;
let sum = arr.reduce((acc,cur)=>
{acc = acc + cur 
return acc;},0);
var answer = sum/n;*/

// Best
let arr2 = [1, 2, 3, 4];
var answer = arr2.reduce((acc,cur)=>{
    acc+=cur;
    return acc})/arr2.length;
console.log(answer);

let arr3 = [1,2,3,4];
let sum = 0;
for(let i=0; i<arr3.length; i++){
    sum += arr3[i];
}
var myanswer = sum/arr3.length;
console.log(myanswer);