let x = 211;
let xArraySum = String(x).split('').map((v)=>parseInt(v)).reduce((acc,cur)=>{
acc = acc + cur;
return acc;
},0);
console.log(xArraySum);

var answer = x%xArraySum===0? true : false;
console.log(answer);
