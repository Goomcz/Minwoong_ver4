let arr1 = [[1], [2]];
let arr2 = [[3], [4]];
// [[4, 6], [7, 9]]

var answer = new Array(arr1.length).fill(0).map(()=> new Array(arr1[0].length));
console.log(answer);
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr1[i].length; j++){
    answer[i][j]=arr1[i][j]+arr2[i][j];
    }
}
console.log(answer);
/*
더할 수는 있었으나, 다시 배열로 묶는데 어려움을 겪었음
let newArr1= arr1.flat();
let newArr2= arr2.flat();
for(let i=0; i<newArr1.length; i++){
    answer.push(newArr1[i]+newArr2[i]);
}*/


/*
NaN 뜸..
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr1[0].length; j++){
        answer.push([arr1[i][j]+arr2[i][j],arr1[i][j+1]+arr2[i][j+1]]);
    }
}
*/

