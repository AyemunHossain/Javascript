var options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
var {width: w, height: h, title} = options;


console.log(title);
console.log(w);
console.log(h);

delete options;
delete title,width,height;

console.log("----------------------------");
// another example

var options = {
  title: "Menu"
};

var {width = 100, height = 200, title} = options;

console.log(title);
console.log(width);
console.log(height);

delete options;
delete title,width,height;
console.log("----------------------------");
// another example

var options = {
  title: "Menu",
  width: 100,
  height: 200
};

//we try to extract an unknown key
var { name } = options;

console.log(name); // undefined