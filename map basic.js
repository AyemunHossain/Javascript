var map = new Map();

// cute intro for map :) 
// we know in js we have object to stor keyed value but in real life things are more complecated
// that's whty we need to use map, because in map key can be any kind of data structure of js


map.set('name','Ashik');
map.set('id',2408);
map.set(181,true);
map.set(true,'Regular');

console.log(map.get('name'));
console.log(map.get('id'));
console.log(map.get(181));
console.log(map.get(true));