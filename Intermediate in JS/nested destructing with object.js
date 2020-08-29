// a nested object 
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};


var {
  size:{
    width,
    height,
  },
  items:[item1,item2],
  extra
}=options;
 
console.log(width); 
console.log(height); 
console.log(item1);  
console.log(item2);
console.log(extra);


// note : let {width: w = 100, height: h = 200, title} = options; here
// width,height is using as a refrence for the extract values from option object