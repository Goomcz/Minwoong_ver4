let n = 3; let m = 12;
let Lmultiple = 0; 
for(let i=n*m; i>0; i--){
    if(i%n===0 && i%m === 0){
        Lmultiple = i;
    } else if(i <= m || i <=n){
        break;
    }
}
console.log(Lmultiple);

var answer = [n*m/Lmultiple,Lmultiple];
console.log(answer);