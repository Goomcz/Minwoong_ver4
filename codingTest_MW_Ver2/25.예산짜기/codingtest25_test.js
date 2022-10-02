let d = [1, 3, 2, 5, 4];
let budget = 9;
let budgetCheck = 0;
let counts =0;
let newD = d.sort(function(a,b){
    return a-b;
    });

    for(let i=0; i<newD.length; i++){
        
        
        if(budgetCheck<budget){
        budgetCheck +=  newD[i];
        counts++;
        }
        else {
            break;
        }
    }
    console.log(counts-1);