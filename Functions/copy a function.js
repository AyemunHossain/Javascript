function sayHi() {   // create
    console.log("Hello");
}

let func = sayHi;    // copy

func(); 
sayHi();