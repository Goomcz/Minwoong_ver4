// 10을 처리할 방법이 없다..
let dartResult = '1D2S#10S'; // 9 
let regExpScore1 = /[0-9]{1,2}[SDT][#*]|[0-9]{1,2}[SDT]/gi; // {1,2} 안쓰면 10 인식 못함
let newDartResult= dartResult.match(regExpScore1);
console.log(newDartResult);
let scoreArray = [];
for(let i=0; i<3; i++){
        if(newDartResult[i].split('').length === 2){
            switch(newDartResult[i].split('')[1]){
                case 'S' : scoreArray.push(Number(newDartResult[i].split('')[0])**1); break;
                case 'D' : scoreArray.push(Number(newDartResult[i].split('')[0])**2); break;
                case 'T' : scoreArray.push(Number(newDartResult[i].split('')[0])**3); break;
            }
        }
        else if(newDartResult[i].split('')[2] === '*'){
            switch(newDartResult[i].split('')[1]){
                case 'S' : 
                scoreArray.push((Number(newDartResult[i].split('')[0])**1)*2); 
                scoreArray[i-1] *=2;
                scoreArray[i-2] *=2;
                break;
                
                case 'D' : 
                scoreArray.push((Number(newDartResult[i].split('')[0])**2)*2); 
                scoreArray[i-1] *=2;
                scoreArray[i-2] *=2;
                break;
                
                case 'T' : 
                scoreArray.push((Number(newDartResult[i].split('')[0])**3)*2); 
                scoreArray[i-1] *=2;
                scoreArray[i-2] *=2;
                break;
            }
        
        }
        else if(newDartResult[i].split('')[2] === '#'){
            switch(newDartResult[i].split('')[1]){
                case 'S' : 
                scoreArray.push((Number(newDartResult[i].split('')[0])**1)*(-1)); 
                break;
                
                case 'D' : 
                scoreArray.push((Number(newDartResult[i].split('')[0])**2)*(-1)); 
                break;
                
                case 'T' : 
                scoreArray.push((Number(newDartResult[i].split('')[0])**3)*(-1)); 
                break;
            }
    };
}
console.log(scoreArray);
var answer = scoreArray[0]+scoreArray[1]+scoreArray[2];
console.log(answer);