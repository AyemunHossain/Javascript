let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

console.log(array[0]);	//but we can have the value stored in array[0]