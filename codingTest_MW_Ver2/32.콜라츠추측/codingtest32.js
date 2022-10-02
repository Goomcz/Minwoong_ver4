/*
주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 
위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 
단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
*/
let num = 6; // -1
let count = 0;
/*while(true){
    num%2===0? (num/=2, count++) : (num===1? count = 0 : (num = (num*3)+1, count++));
    if(count === 0 || num=== 1){
        break;
    } else if(count===500){
        count = -1;
        break;
    }
}*/

while(true){
    num===1? count=0 
    : (count===500? count=-1 
    : (num%2===0? (num/=2, count++) 
    : (num = (num*3)+1, count++)));
    if(num=== 1 || count === -1){
        break;
    } 
}
console.log(count);
