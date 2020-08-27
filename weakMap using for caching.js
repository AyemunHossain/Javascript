let cache = new WeakMap();


function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}


let obj = {name:'ashik',password:12345678};

let result1 = process(obj); 

let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

console.log(cache.size);		//it's not taking memory... i gonna fall in love with it :)