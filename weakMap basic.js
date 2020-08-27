// weak___________________________map

// The main area of application for WeakMap is an additional data storage.

// If we’re working with an object that “belongs” to another code, maybe 
// even a third-party library, and would like to store some data associated with it,
// that should only exist while the object is alive – then WeakMap is exactly 
// what’s needed.

let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, ".let's say some secret data <maybe his or his gf n*des:)).");

john = null; // overwrite the reference

//weakmap just release the storage 