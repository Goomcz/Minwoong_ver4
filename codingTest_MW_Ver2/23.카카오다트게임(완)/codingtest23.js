let dartResult = '1D2S0T'; 
//'1S*2T*3S' 23
// 1D#2S*3S = 5
// S : 1제곱 // D : 2제곱 // T : 3제곱
// * 2배 중첩 가능 # -1배 중첩 가능 * #은 보너스로 있을 수도 없을 수도 있으며 있으면 둘 중 한개만 있고 둘이 교차 효과 발휘됨

let regExpScore1 = /[0-9][SDT][#*]|[0-9][SDT]/gi;
let newDartResult= dartResult.match(regExpScore1);
let score = 0;
for(let i=0; i<3; i++){
    let game = [];
    game.push(newDartResult[i].split(''));
    if(game[0].length===2){
    switch(game[0][1]){
        case 'S' : score += Number(game[0][0])**1; break;
            case 'D': score += Number(game[0][0])**2; break; 
                case 'T' : score += Number(game[0][0])**3; break;
        }
    } else if(game[0][2] === '*'){
        switch(game[0][1]){
            case 'S' : score += Number(game[0][0])**1; break;
                case 'D': score += Number(game[0][0])**2; break; 
                    case 'T' : score += Number(game[0][0])**3; break;
            } 
    }
    game.pop();
}

console.log(score);

