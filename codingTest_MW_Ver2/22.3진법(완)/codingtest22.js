    let n = 45;
    let trinary= [];
    while(n > 0){
        if(n%3===0){
            trinary.push(0);
            n/=3;
        }
        else if(n < 3){
            trinary.push(n);
            break;
        } 
        else{
            trinary.push(n%3);
            n = (n-n%3)/3;
        }
    }
    let trinaryReversed = trinary.reverse();
    var answer = trinaryReversed.reduce((acc,cur,i) => 
        acc += cur * (3 ** i),0);
    