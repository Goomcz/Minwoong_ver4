// First
/*let arr = [1,2,3,4];
let n = arr.length;
let sum = arr.reduce((acc,cur)=>
{acc = acc + cur 
return acc;},0);
var answer = sum/n;*/

// Best
let arr2 = [1, 2, 3, 4];
var answer = arr2.reduce((acc,cur)=>
{return acc+=cur})/arr2.length;
console.log(answer);