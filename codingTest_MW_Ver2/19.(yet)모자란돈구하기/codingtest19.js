let money =20;
let count =4;
let price = 3;
let needMoney =0;
for(let i=1; i<=count; i++){
    needMoney += price*i;
}
if(needMoney <= price){
    var answer = 0;
} else{
    var answer = needMoney - money;
}

console.log(answer);
