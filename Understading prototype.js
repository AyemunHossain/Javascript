function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.nationality = "English";
  }

  
  Person.prototype.eyeColor="black";         //prototype for all instance of object
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  var myFather = new Person("John", "Doe", 50);   //binding function as object
  var myMother = new Person("Sally", "Rally", 48);
  
  console.log(myFather);         
  console.log(myMother);          

  var myBrother = new Person("Alex", "Doe", 22);
  var mySister = new Person("Jordina", "Rally", 12);
 
  console.log(myBrother);
  console.log(mySister);
  
  console.log("My Father eyecolor:"+myFather.eyeColor);
  console.log("My Mother eyecolor:"+myMother.eyeColor);
  console.log("My brother eyecolor:"+myBrother.eyeColor);
  console.log("My Sister eyecolor:"+mySister.eyeColor);
  console.log()
  console.log("My Father Name :"+myFather.name());
  console.log("My Mother Name:"+myMother.name());
  console.log("My brother Name:"+myBrother.name());
  console.log("My Sister Name:"+mySister.name());      