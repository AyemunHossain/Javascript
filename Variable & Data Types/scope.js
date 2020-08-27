myFunction();   //now all myFunction local variable is become global 

console.log(carName)

function myFunction() {
  carName = "Volvo";
  customer = "Ashik";
  credit = 4343343434343;
}

console.log(credit)         