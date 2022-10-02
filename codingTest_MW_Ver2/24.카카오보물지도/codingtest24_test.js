let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
let n = 6;
let newArr1 = arr1.map((val)=> {
    let valTemp = val.toString(2).split('').map(Number); // map(Number) 기억해두기
    if(valTemp.length<n){
        while(valTemp.length!==n){
            valTemp.unshift(0);
        }
    }
    return valTemp;
});

let newArr2 = arr2.map((val)=> {
    let valTemp = val.toString(2).split('').map(Number);
    if(valTemp.length<n){
        while(valTemp.length!==n){
            valTemp.unshift(0);
        }
    }
    return valTemp;
});
var answer = [];
console.log(answer);
for(let i=0; i<n; i++){
    let answerTemp = [];
    console.log(answerTemp);
    for(let j=0; j<n; j++){
        if((newArr1[i][j]+newArr2[i][j])>=1){
            answerTemp.push('#');
        } else if((newArr1[i][j]+newArr2[i][j])===0){
            answerTemp.push(' '); 
        }
    }
    answer.push(answerTemp.join(''));
}
console.log(answer);
