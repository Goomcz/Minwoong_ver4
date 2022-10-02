// 각 스테이지 별로 실패율을 나타내는 오브젝트 까지 완성
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let N = 5;
let tryer = []; 
let failer = []; 
let failPercent = {};

function MakeFailPercentObj(failPercent,key,value){
    failPercent[key] = value; // 이 코드에 대한 이해 필요
}
for(let i=1; i<N+1; i++){
stages.filter(ele => {
    if(ele >=i){
        tryer.push(ele);        
    }});
tryer.filter(ele => {
    if(ele === i){
        failer.push(ele);
    }});
    MakeFailPercentObj(failPercent,i,(failer.length/tryer.length));
    tryer.splice(0,tryer.length);
    failer.splice(0,failer.length);
}
console.log(failPercent);

function getValue(failPercent,key){
    return failPercent[key];
}

let newFailPercent = Object.keys(failPercent).sort(function(a,b){
    return getValue(failPercent,b) - getValue(failPercent,a);
    });

console.log(newFailPercent);
var answer = newFailPercent.map(function(item){
    return parseInt(item);
})

console.log(answer);
