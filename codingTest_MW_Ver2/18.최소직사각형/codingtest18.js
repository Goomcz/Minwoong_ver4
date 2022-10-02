let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
let Garo = [];
let Sero = [];
// [가로, 세로]

for(let i=0; i<sizes.length; i++){
    if(sizes[i][0] < sizes[i][1]){
        sizes[i].reverse();
        Garo.push(sizes[i][0]);
        Sero.push(sizes[i][1]);
    } else if(sizes[i][0] >= sizes[i][1]){
        Garo.push(sizes[i][0]);
        Sero.push(sizes[i][1]);
    }
}
var answer = Math.max(...Garo)*Math.max(...Sero);
console.log(answer);



