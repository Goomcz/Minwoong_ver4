// 하나 이상의 공백으로 분리된 문자열에서
// 각 문자의 짝수 인덱스 글자를 대문자로, 홀수는 소문자로 리턴하는 함수

let s = 'try    hello  world';
// "TrY HeLlO WoRlD"

// let newnewS = newS.map((val)=>{val.split('')}); 이건 왜 ,undefined 나오지?
let d = ['a','b'];
console.log(s.toUpperCase());
console.log(d[0].toUpperCase());
console.log(s.split(' '));
let newS=s.split(' ').map((val) =>{
return val.split('')
});

console.log(newS);

for(let i=0; i<newS.length; i++){
    for(let j=0; j<newS[i].length; j++){
        if(j%2===0){
            newS[i][j] = newS[i][j].toUpperCase(); 
        } else newS[i][j] = newS[i][j].toLowerCase();
    }
}

console.log(newS);

var answer = newS.map((val) => {
    return val.join('')
}).join(' ');

console.log(answer);