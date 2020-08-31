let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

let deep = {


    aa(x) {
        console.log("Called with " + x);
        return x ; // (*)
    }
};

function decorator(func){
    cache = new Map();
    return function(x){
        if (cache.has(x)){
            return cache.get(x);
        }else{
            result = func.call(this, x);
            cache.set(x,result);
            return result; 
        }
    };
}

worker.slow = decorator(worker.slow);

console.log(worker.slow(2));


