let numbers = [2, 1, 3, 4, 1]; 
let sumArray = [];
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(sumArray.includes(numbers[i]+numbers[j])!==true){    
            sumArray.push(numbers[i]+numbers[j]);
            }
        }
    }
    sumArray.sort(function(a,b){
            return a-b;
        })
        console.log(sumArray);