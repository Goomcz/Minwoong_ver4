// arr와 divisor 가 주어진다
// arr에는 서로다른 자연수를 담은 배열이며, divisor 역시 자연수 이다.
// arr의 ele중 divisor로 나눠떨어지는 ele만 담은 배열을 오름순으로 정렬한 배열을 리턴하는 함수 작성해라
// 아무것도 없으면 -1 리턴해라

let arr= [5, 9, 7, 10]
let divisor = 5;

var answer = arr.filter(ele => {
    return ele % divisor ===0;
}).sort((a,b)=> a-b);
console.log(answer);

answer.length === 0 ? -1 : answer;