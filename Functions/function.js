console.log(myFunction(4, 3));                           // you can call funtion before assigning function :)


function myFunction(a, b) {
  return a * b;            
}

// > local variable

function loc(){

    var name = "ashik"; //local variable
}

var id = 2408   //global variable   

function test(a,b,c,d){

    return a*10,b*10,c*10,d*10
}
var result = test(1,2,3,4)
console.log(typeof result)
console.log(result)     //only catched the last return 
