let dartResult = '1S*2T*3S'; // 9 
const Section = { 'S': 1, 'D': 2, 'T': 3 };
const bonus = { '*': 2, '#': -1, undefined: 1 };
let dartNumber = dartResult.match(/\d{1,2}/g);
let dartString = dartResult.match(/[S|D|T][*|#]?/g); 
let scoreArray = [];
console.log(dartNumber);
console.log(dartString);

for (let i = 0; i < dartNumber.length; i++) {
    let split = dartString[i].split('');
    console.log(split);
    let score = Math.pow(Number(dartNumber[i]), Section[split[0]]) * bonus[split[1]];
    console.log(score);
    scoreArray.push(score);
    if(split[1] === '*'){
        scoreArray[i-1]*=2;
    }
}
console.log(scoreArray);
var answer = scoreArray.reduce((a, b) => a + b);
console.log(answer);

// \ 가 의미하는 바, .(dot)이 의비하는바 가 뭘까?
// dot(.) : 줄바꿈 문자를 제외한 모든 문자를 의미함
// ? : 앞의 문자가 나올수도 안나올 수도 있다 {0,1} 과 동일함
// \ : 메타문자임을 알려주는 기호이다. 여기서 메타문자란 정규 표현식을 제어할 수 있는 문자로,
// 예를 들어, { }, [ ], .(dot) 등등이 있다. 즉 /d/는 그저 'd'라는 소문자의 정규식이지만, 
// /\d/는 모든 숫자를 포함하는 메타문자가 된다.