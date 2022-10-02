let d = [2,2,3,3];
let budget = 10;
let budgetCheck =0;
let answer = 0;
d.sort((a,b)=>a-b).forEach(ele=>{
    if(budgetCheck<budget){
    budgetCheck+=ele;
    answer++;
    }
});
console.log(answer);