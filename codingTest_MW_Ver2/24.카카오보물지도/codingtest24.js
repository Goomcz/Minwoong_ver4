// for 문을 너무 많이 써야 함... 다른 방법이 분명 있을 것이다.
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
let newArr1 = [];
let newArr2 = [];
let n = 5;

for(let i=0; i<n; i++){
    newArr1[i]= new Array();
    newArr2[i]= new Array();
    if(arr1[i]===1){
        for(let j=0; j<n-1; j++){
            newArr1[i].push(0);
        }
        newArr1[i].push(1);
    } else{
    while(arr1[i]>=2){
        newArr1[i].unshift(arr1[i]%2);
        arr1[i]=Math.floor(arr1[i]/2);
    } newArr1[i].unshift(arr1[i]);
    if(newArr1[i].length<5){
        newArr1[i].unshift(0);
    }}
    if(arr2[i]===1){
        for(let k=0; k<n-1; k++){
            newArr2[i].push(0);
        }
        newArr2[i].push(1);
    }
    else{
        while(arr2[i]>=2){
        newArr2[i].unshift(arr2[i]%2);
        arr2[i]=Math.floor(arr2[i]/2);
    } newArr2[i].unshift(arr2[i]);
    if(newArr2[i].length<5){
        newArr2[i].unshift(0);
    }
    }
}
console.log(newArr1);
console.log(newArr2);