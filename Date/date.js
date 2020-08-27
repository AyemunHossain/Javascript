var now = new Date()
console.log(now)

//geting date form string 


var d = new Date(" jan 23:13:00  13 2020 ");
console.log(d)
var d = new Date(" 2020 jan 23:13:00 13 ");
console.log(d)
var d = new Date(" jan 23:13:00 2020 13");
console.log(d)
var d = new Date("13 jan 23:13:00 2020 ");
console.log(d)

//getTime

console.log(d.getTime())                //miliseconds return 

console.log(d.getFullYear())

console.log(d.getMonth())               // 0 - jan , 11-dec

console.log(d.getMinutes())             // minutes of that date 

console.log(d.getDay())
console.log(d.getSeconds())
