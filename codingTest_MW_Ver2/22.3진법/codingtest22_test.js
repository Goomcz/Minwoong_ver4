let n = 45;
let trinary= [];
while(n>=3){
    trinary.unshift(n%3);
    n = Math.floor(n/3);
}
trinary.unshift(n);
var answer = trinary.reduce((acc,cur,i) => 
acc += cur * (3 ** i),0);
console.log(answer);
