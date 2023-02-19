// Combination 함수 사용하여 다시 풀어볼것
let number = [-3, -2, -1, 0, 1, 2, 3];
// 5
let counts =0;
for(let i=0; i<number.length; i++){
    for (let j= i+1; j<number.length; j++){
        for(let k = j+1; k<number.length; k++){
        (number[i] + number[j] + number[k]) === 0?
        counts+=1 : counts+=0;
        }
    }
}
console.log(counts);

