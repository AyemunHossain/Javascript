function makeClass(x,phrase) {

    if(x==1)
    {
        // declare a class and return it
        return class {
            sayHi() {
                console.log(phrase);
            }
        };
    }
    
}


let User = makeClass(1,"Hello From The Hell");
new User().sayHi();