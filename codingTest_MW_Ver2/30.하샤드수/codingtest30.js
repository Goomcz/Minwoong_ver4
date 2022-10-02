var answer = true;
let x = 10;
let xArraySum = String(x).split('').map(Number).reduce((acc,cur)=>{
acc = acc + cur; // map(Number) 구동 원리
return acc;
},0); // split 자체가 배열로 만들어 주는구나!
answer = x%xArraySum===0? true : false;
console.log(answer); 
