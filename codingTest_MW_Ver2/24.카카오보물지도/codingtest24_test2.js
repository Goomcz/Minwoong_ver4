let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
let n = 6;
let newArr1 = arr1.map((val)=>{
    let tempArr = [];
    while(val>=2){
        tempArr.unshift(val%2);
        val = Math.floor(val/2); // ...? val 을 [ 이진법 배열 ] 로 나타내야하는데..
    }
    tempArr.unshift(val);
    if(tempArr.length<n){
        while(tempArr.length!==n){
            tempArr.unshift(0);

        }
    }
    return tempArr;
});
console.log(newArr1);

let newArr2 = arr2.map((val)=>{
    let tempArr2 = [];
    while(val>=2){
        tempArr2.unshift(val%2);
        val = Math.floor(val/2); // ...? val 을 [ 이진법 배열 ] 로 나타내야하는데..
    }
    tempArr2.unshift(val);
    if(tempArr2.length<n){
        while(tempArr2.length!==n){
            tempArr2.unshift(0);
        }
    }
    return tempArr2;
});

console.log(newArr2);
// toString(2) 로 해보자 !

var answer = [];
console.log(answer);
for(let i=0; i<newArr1.length; i++){
    let answerTemp = [];
    console.log(answerTemp);
    for(let j=0; j<newArr1[0].length; j++){
        if((newArr1[i][j]+newArr2[i][j])>=1){
            answerTemp.push('#');
        } else if((newArr1[i][j]+newArr2[i][j])===0){
            answerTemp.push(' '); 
        }
    }
    answer.push(answerTemp.join(''));
}
console.log(answer);
//["######", "###  #", "##  ##", " #### ", " #####", "### # "]