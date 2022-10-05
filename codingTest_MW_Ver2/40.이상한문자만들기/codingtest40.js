let s = 'try hello world'; // "TrY HeLlO WoRlD"

let newS = s.split(' ');
console.log(newS);
let newS2 = newS.map((v)=> v.split(''));
console.log(newS2);

for(let i=0; i<newS2.length; i++){
    for(let j=0; j<newS2[i].length; j++){
        if(i%2===0){
        newS2[i][j] = toUpperCase(newS2[i][j]);
        }
    }
}

console.log(newS2);