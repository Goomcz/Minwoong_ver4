let n = 2; let m = 5; // 최대공약수 최소공배수 [3, 12]

// < 최소공배수 구하기 >
/*let Lmultiple = 0; 
for(let i=n*m; i>0; i--){
    if(i%n===0 && i%m === 0){
        Lmultiple = i;
    } else if(i <= m || i <=n){
        break;
    }
}
console.log(Lmultiple); */

// < 최대 공약수 구하기 위한 약수 구하기>
/*let divisor = {'n' : [], 'm' : []};
let Gdivisor =0;
for(let i=1; i<=n; i++){
    if(n%i===0){
        divisor['n'].push(i); // key에 ' ' 안하면 push가 안됨
    }
}
for(let j=1; j<=m; j++){
    if(m%j===0){
        divisor['m'].push(j);
    }
}
console.log(divisor);

for(let k=0; k<divisor['n'].length; k++){
    console.log(k);
    if(divisor['m'].includes(divisor['n'][k])){
        Gdivisor = divisor['n'][k];
    }
}
console.log(Gdivisor);
// -------------------------------------------------------------*/

