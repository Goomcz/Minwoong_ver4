let phone_number = "01033334444";
    let phone_numberNew = [...phone_number.split('')];
    for(let i=0; i<phone_numberNew.length-4; i++){
        phone_numberNew[i]='*';
    }
    var answer = phone_numberNew.join('');
    console.log(answer);