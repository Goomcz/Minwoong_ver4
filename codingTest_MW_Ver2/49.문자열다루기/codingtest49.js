// a234
// 문자열이 숫자로만 이루어졌는지 판단하는 함수만들어라
// a234면 false / 1234면 true 리턴

let s= '123';
// var answer = isNaN(parseInt(s)) === true ? false : true;
//var answer = s.length === 4 || s.length ===6 ? (isNaN(Number(s)) === false ? true : false) : false;
//console.log(answer);
//s.length === 4 || s.length ===6 로 바꾸고
// parseInt를 Number로 바꾸고는 1개 test만 틀리는 것으로 나옴
// 3e10을 숫자로 인식하는구나
var answer;

// if 문 안에 reduce 정의하면 안되나?

    let result = s.split('').reduce((acc,cur)=>{
        isNaN(Number(cur)) === true ? acc -=1 : acc +=1;
        return acc},0);
        console.log(result);
// 왜 s.length === 4 || s.length ===6 이렇게 써야 되는거지?
        if((s.length === 4 || s.length ===6) && s.length === result){
            answer = true;
        } else answer = false;

        console.log(answer);