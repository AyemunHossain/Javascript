var x = new String('John');      //it's not string ..it's object datatype, carefull :)
console.log(typeof x);

console.log(x);

var x = new String("John");             
var y = new String("John");

// (x === y) is false because x and y are different objects

var person = {
    fname:'AH',
    lname:'Ashik',
    id: 2444,
    fullname: function(){
        return this.fname+ " " + this.lname;
    }
}
console.log(person.fullname());



var txt = "";
var person = {fname:"AH", lname:"Ashik", age:20}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
console.log(txt);

//adding new propreties 

person.nationality = "Bangladesh";
console.log(person);

// delete propreties
delete person.nationality;


//object constractor 
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}

var myFather = new Person("John", "Doe", 50, "blue");   //binding function as object
var myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather)
console.log(myMother)
