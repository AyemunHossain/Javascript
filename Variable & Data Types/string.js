var name = "ashik"
console.log(name.length)

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])    //undefined


var complex = "This is Ashik\'s github"
console.log(complex)

var complex = "\"This is Ashik\'s github\""
console.log(complex)

var complex = "\"\\This is Ashik\'s github\\\""     //if we want complex string 
console.log(complex)


var complex = "This is Ashik\'s github \v"     //if we want complex string 
console.log(complex)
console.log("This is a test for \\v")


var x = 'John'
console.log(typeof x)

var x = new String('John')      //it's not string ..it's object datatype, carefull :)
console.log(typeof x)

console.log(x)