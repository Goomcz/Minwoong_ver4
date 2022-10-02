// 10을 처리할 방법이 없어서 찾은 다른 방법
let dartResult = '1D2S3T*'; // 9 
let regExpScore1 = /[SDT][#*]|[SDT]/gi;
let regExpScore2 =  /[0-9]{1,2}/gi;
let DartScore = dartResult.match(regExpScore2);
let DartSection = dartResult.match(regExpScore1);
let ScoreArray = [];

for(let i=0; i<3; i++){
    if(DartSection[i].split('').length === 2){
        switch(DartSection[i].split('')[1]){
            case '*' :
                if(DartSection[i].split('')[0]==='S'){
                    ScoreArray.push((Number(DartScore[i])**1)*2);
                    ScoreArray[i-1]*=2;
                    break;
                }
                else if(DartSection[i].split('')[0]==='D'){
                    ScoreArray.push((Number(DartScore[i])**2)*2);
                    ScoreArray[i-1]*=2;
                    break;
                }
                else if(DartSection[i].split('')[0]==='T'){
                    ScoreArray.push((Number(DartScore[i])**3)*2);
                    ScoreArray[i-1]*=2;
                    break;
                }
            case '#' :
                if(DartSection[i].split('')[0]==='S'){
                    ScoreArray.push((Number(DartScore[i])**1)*(-1));
                    break;
                }
                else if(DartSection[i].split('')[0]==='D'){
                    ScoreArray.push((Number(DartScore[i])**2)*(-1));
                    break;
                }
                else if(DartSection[i].split('')[0]==='T'){
                    ScoreArray.push((Number(DartScore[i])**3)*(-1));
                    break;
                }
        }
    } else if(DartSection[i].split('').length === 1){
        switch(DartSection[i].split('')[0]){
            case 'S' : ScoreArray.push(Number(DartScore[i]**1)); break;
            case 'D' : ScoreArray.push(Number(DartScore[i]**2)); break;
            case 'T' : ScoreArray.push(Number(DartScore[i]**3)); break;
        }
    }
}
console.log(ScoreArray);
var answer = ScoreArray[0]+ScoreArray[1]+ScoreArray[2];
console.log(answer);
