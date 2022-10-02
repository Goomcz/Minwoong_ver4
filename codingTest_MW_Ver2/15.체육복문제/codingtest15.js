let n = 5; let lost =[2,4]; let reserve = [2,3,5];

let nArray = {};
function ObjectNArray(nArray,key,value){
    nArray[key] = value;
}
for(let i=1; i<=n; i++){
    if(lost.includes(i)===true && reserve.includes(i)===true){
    ObjectNArray(nArray,i,1);
    }
    else if(lost.includes(i)===false && reserve.includes(i)===false){
    ObjectNArray(nArray,i,1);   
    }
    else if(lost.includes(i)===true && reserve.includes(i)===false){
    ObjectNArray(nArray,i,0);
    }
    else if(lost.includes(i)===false && reserve.includes(i)===true){
    ObjectNArray(nArray,i,2);   
    }
}
for(let j=1; j<=n; j++){
    if(nArray[j]===0){
        if(nArray[j-1]===2){
            nArray[j]=1;
            nArray[j-1]=1;
        } else if(nArray[j-1]!==2 && nArray[j+1]===2){
            nArray[j]=1;
            nArray[j+1]=1;
        }
    }
}
var answer = (Object.values(nArray).filter(ele => ele > 0)).length;
