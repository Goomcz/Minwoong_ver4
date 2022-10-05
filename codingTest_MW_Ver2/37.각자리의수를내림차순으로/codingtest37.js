let n = 118372; // 873211

let arrangedNum = String(n).split('').map((v)=> parseInt(v)).sort(function(a,b){return b-a}).join('');
var answer = Number(arrangedNum);

console.log(answer);


/*var answer = 안된 이유 찾기
String(n).split('').map((v)=> parseInt(v))
.sort(function(a,b){ return b-a}).join('').map((v)=> parseInt(v));*/