/*function solution(s){
    var answer = true;
    console.log('Hello Javascript')

    return answer;
}  p의 갯수와 Y의 갯수가 같으면 True or False , 아예 없음 True*/

let s = 'Pyy';
var answer = (s.toLowerCase().split('').filter(val => val === 'p' || 'y').reduce((acc,cur)=>{
    if(cur==='p'){
        acc += 1;
    } else if(cur==='y'){
        acc -= 1;
    }
    return acc;
},0)) > 0 ? true : false;
console.log(answer);
// filter 함수, split 함수, 삼항연산자, 명시적 반환, 암시적 반환 다시 공부할 것



/*let newS = s.toLowerCase().split('')
let pStringNum= (newS.filter(val => val === 'p')).length;
let yStringNum =(newS.filter(val => val === 'y')).length;
console.log(pStringNum);
console.log(yStringNum);

if(pStringNum===yStringNum){
    var answer = true;
} else var answer = false;

*/



