let max = (prev_max, curr) => Math.max(prev_max, curr);

var num = [{ x: 22 }, { x: 42 }, { x: 2 }, { x: 33 }, { x: 444 }, { x: 1 }];
var num2 = [22, 42, 2, 33, 2,1];

console.log(num.map(val => val.x).reduce(max, 0));
console.log(num2.map(val => val).reduce(max, 0));