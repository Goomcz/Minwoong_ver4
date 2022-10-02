/*let myArray = ['apple','grape','orange','orange','grape','grape'];
let result = myArray.reduce((acc,cur) => {
    if(!acc[cur]){
    acc[cur] = 0;
    }
    acc[cur]++
    return acc},{});
console.log(result);*/

let num = [1,2,3,4,5,6,7,8,9];
let result = num.reduce((acc,cur,i) =>{
    cur % 2 === 0 ? acc[cur] = '짝' : i++
    return acc;},{});

console.log(result);


let myArray = [1,2,3,4,5];
let sumArray = myArray.reduce((acc,cur) => {
    acc += cur
    return acc;},0);
    console.log(sumArray);

    // arroww function 을 써도 { } 을 쓰면 return 을 명시해줘야 함
    // arrow function 을 쓰고, 단항식을 쓰면 return 안해줘도 되는 암시적 반환이 가능
    // 즉, 