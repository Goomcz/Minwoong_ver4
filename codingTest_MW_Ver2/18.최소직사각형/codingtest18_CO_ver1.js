let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
let wArray = [];
let hArray = [];
/*
let newsizes3 = sizes.map(([w,h]) => w > h ? [w,h] : [h,w]); //암시적 반환으로 return 생략 가능
console.log(newsizes3);

let newsizes2 = sizes.map(function([w,h]){
    w > h ? [w,h] : [h,w]
});
console.log(newsizes2); // undefined

*/

let newsizes = sizes.map(function([w,h]){ // 구조 분해 할당 공부해볼 것
    return w > h ? [w,h] : [h,w]
});

console.log(newsizes);

newsizes.forEach(function([w,h]){   
    wArray.push(w)
    hArray.push(h)
});
var answer = Math.max(...wArray)*Math.max(...hArray);
console.log(answer);

