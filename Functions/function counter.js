function sayHi() {
    sayHi.counter++;
}
sayHi.counter = 0; //you have to initialize this on this section ono inside function :)

sayHi();
sayHi();

console.log(`Called ${sayHi.counter} times`); 

//another two times and let's see :)
sayHi();
sayHi();
console.log(`Called ${sayHi.counter} times`); 