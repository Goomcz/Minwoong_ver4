let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
let n = 6;
    let num1, num2, s;
    let answer = [];
    for (let i=0; i<n; i++){
        num1 = arr1[i];
        num2 = arr2[i];
        s = '';
        for (let j=0; j<n; j++){
            s = (num1%2 + num2%2) ? '#'+s : ' '+s;
            num1 = Math.floor(num1/2);
            num2 = Math.floor(num2/2);
        }
        answer.push(s);
    }
    console.log(answer);
