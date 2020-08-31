let worker = {
    slow(min, max) {
        console.log(`Called with ${min},${max}`);
        return min + max;
    }
};


function deco(func) {
    cache = new Map();
    return function () {

        var key = generate_key(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            result = func(...arguments);
            cache.set(key, result);
            return result;
        }
    };
}


function generate_key(args) {
    return args[0] + ',' + args[1];
}

worker.slow = deco(worker.slow);

console.log(worker.slow(2, 3)); //new call 
console.log(worker.slow(2, 3)); //repeat 

console.log(worker.slow(1, 3)); //new call 
console.log(worker.slow(2, 3)); //old call