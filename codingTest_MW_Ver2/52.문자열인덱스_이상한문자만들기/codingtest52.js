// 하나 이상의 공백으로 분리된 문자열에서
// 각 문자의 짝수 인덱스 글자를 대문자로, 홀수는 소문자로 리턴하는 함수

let s = 'try hello world';
// "TrY HeLlO WoRlD"

/*let newS = s.split(' ').map(val => val.split('')).map();
console.log(newS);*/

// let newnewS = newS.map((val)=>{val.split('')}); 이건 왜 ,undefined 나오지?

let newS = s.split('').reduce((acc,cur)=>{
    if(acc%2===0)  {
        cur = toUppercase(cur);
        acc++;
    } else if(cur===''){
        acc = 0;
    }
},0);

console.log(newS);