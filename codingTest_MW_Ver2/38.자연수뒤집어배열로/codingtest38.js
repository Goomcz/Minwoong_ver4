let n = 12345; // [5,4,3,2,1]
var answer = String(n).split('').reverse().map((v)=> Number(v));
    return answer;


    
    /* 
    배워야할 풀이. 문자풀이보다 숫자 풀이가 더 빠르다!
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
    
    */