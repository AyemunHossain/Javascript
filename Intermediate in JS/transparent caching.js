function slow(x){
    console.log(`called with ${x}`);
    return x;
}

function caching(func){
    console.log("i")
    let cache = new Map();

    return function(x){     //this part is wrapper .. this section will cover up the call for func, so when func(x) call it will execute 
        if (cache.has(x)){
            return cache.get(x);
        }else{
            let result = func(x);
            cache.set(x, result);
            return result;
        }
    };
}

s = caching(slow);

console.log(s(1));
console.log(`again ${s(1)}`);