// 성공 => 그러나, 약수의 개수는 제곱근이 정수가 아니면 항상 짝수네...
// 이중 포문을 작성할 필요가 없네?
let left = 13; //24 
let right = 17; //27
let grandTotal = 0;
let Count = 0;
// 1,18 2,9 3,6 6,3 9,2 18,1 
// 43, 52
for(let i=left; i<=right; i++){
    for(let j=1; j<=i; j++){
        if(i%j===0){
            Count +=1;
        }
    }
    if(Count%2===0){
        grandTotal += i;
    } else if(Count%2!==0){
        grandTotal -= i;
    }

        Count = 0;
}
console.log(grandTotal);
