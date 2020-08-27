var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person2 = {
    firstName:"AH",
    lastName: "Ashik",
  }
  console.log(person1.fullName.call(person2));   //will return AH Ashik