/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
*/

let s = 'a B z';
let n = 4;


console.log('A'.charCodeAt());
console.log('Z'.charCodeAt());
console.log('a'.charCodeAt());
console.log('z'.charCodeAt());
// a  b  c  d   e   f    g    z // 알파벳 개수 26개 -> 25칸 이동 가능
// 97 98 99 100 102          122   *123 -> 97 = 26이네* 
console.log(s.split(''));
let newS = s.split('').map(i => i.charCodeAt());
console.log('시저 암호 전:' + newS);
/*.map((val)=>{
    switch(val+n){
        case val+n >=65 && val <=90 || val+n >=97 && val <=122:
            val = val +n;
            break;
        case val +n > 90 || val +n >122 :
            val = val + n - 26;
            break;
    }
    return val;
});*/ //.map(j => {return j!==32? j+n : j})
for(let i=0; i<newS.length; i++){
if(newS[i] >= 65 && newS[i] <=90){
    if(newS[i] + n >90){
        newS[i] = newS[i] + n - 26; 
    } else newS[i] = newS[i] + n;
} else if(newS[i] >= 97 && newS[i] <= 122){
    if(newS[i] + n >122){
        newS[i] = newS[i] + n - 26; 
    } else newS[i] = newS[i] + n;
}
}

var answer = newS.map(k => String.fromCodePoint(k)).join(''); 
//String.fromCodePoint() 기억해둘것

console.log(newS);
console.log(answer);

