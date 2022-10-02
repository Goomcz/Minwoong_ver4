let d = [2,2,3,3];
let budget = 10;
let answer = d
.sort(function(a,b){
    return a-b;})
.reduce((acc,cur,i,arr)=>{
    acc+=cur;
    if(acc>budget){
        acc=i;
        arr.splice(i);
    } 
    else if(i===arr.length-1){
        acc=i+1;
    }
    return acc;
}
,0);
console.log(answer);
