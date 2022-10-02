let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
let wArray = [];
let hArray = [];
// test2 보다 3초 가량 단축됨(6.33ms에서 3.45ms로)
sizes.map(([w,h])=>
    w > h ? 
    ([w,h], 
    wArray.push(w), 
    hArray.push(h))
    :
    ([h,w], 
    wArray.push(h),
    hArray.push(w))
    );
var answer = Math.max(...wArray)*Math.max(...hArray);
console.log(answer);



