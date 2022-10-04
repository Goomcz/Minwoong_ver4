//------------------최대 공약수 구하기 -2 -------------
let x = 2; let y = 5;
let divisor2 = [];
let tempDivisor = [];
let z = x<y? x : y;
for(let i =1; i <= z; i++){
    if(x%i===0 && y%i===0){
        tempDivisor.push(i);
    }
}
let Gdivisor = Math.max(...tempDivisor);
console.log(Gdivisor);

//------------------최대 공약수 구하기 -1 -------------
/*let n = 3; let m = 12; // 최대공약수 최소공배수 [3, 12]
let divisor = {'n' : [], 'm' : []};
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
console.log(Gdivisor);*/