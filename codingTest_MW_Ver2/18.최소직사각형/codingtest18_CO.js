let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
let wArray = [];
let hArray = [];
let newsizes = sizes.map(function([w,h]){ // 구조 분해 할당 공부해볼 것
    return w > h ? [w,h] : [h,w]
});
newsizes.forEach(function([w,h]){   
    wArray.push(w)
    hArray.push(h)
});
var answer = Math.max(...wArray)*Math.max(...hArray);
