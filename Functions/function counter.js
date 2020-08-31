function sayHi() {
    sayHi.counter++;
}
sayHi.counter = 0; 

sayHi();
sayHi();

console.log(`Called ${sayHi.counter} times`); 

//another two times and let's see :)
sayHi();
sayHi();
console.log(`Called ${sayHi.counter} times`); 