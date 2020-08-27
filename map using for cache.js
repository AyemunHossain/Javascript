let cache = new Map();


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

console.log(cache.size);		//it's taking memory... and i don't like it 