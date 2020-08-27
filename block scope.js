{
    var x = 10;
}
console.log(x)

{
    let y = 20;
}
//console.log(y)  --y is not accessible here

var z = 30;

{
    z = z-x;        //you can secure some datalickage
    var confidential = z;
}

console.log(z)