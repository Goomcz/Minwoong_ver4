/*
2016년 1월 1일은 금요일입니다. 

2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, 

solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

1월 1일 금 / 2일 토 /3일 일 /4일 월 /5일 화 /6 수 /7 목 /8 금 /9 토 /10 일 /11 월
7로 나눈 나머지 1 : 금 ~ 
*/
let a= 5; let b = 24; // TUE
var answer = '';
let calendar = new Map([[1,30],[2,29],[3,31],[4,30],[5,31],[6,30],
        [7,31],[8,31],[9,30],[10,31],[11,30],[12,31]]);
let passedDate = b;
// a-1 = 4 
// b-1 =23
// 1+29 -> 2월 1일  1 + 28 -> 3월 1일  1+30 -> 4월 1일 1+29 -> 5월 1일
// +23 일 ==> total 지난 일 수 => 나눈 나머지 구하기
for(let i=1; i<a; i++){
passedDate += calendar.get(i);
}
console.log(passedDate);
switch(passedDate%7){
        case 1
        :answer = 'FRI';
        break;
        case 2
        :answer = 'SAT';
        break;
        case 3
        :answer = 'SUN';
        break;
        case 4
        :answer = 'MON';
        break;
        case 5
        :answer = 'TUE';
        break;
        case 6
        :answer = 'WED';
        break;
        case 0
        :answer = 'THU';
        break;
}

console.log(answer);


