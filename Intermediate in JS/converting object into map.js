let obj = {
  name: "John",
  age: 30,
  sex:"Male",
  blood_group:"B+",
  religion:"Islam",
  university:"DIU",

};


let user_map = new Map(Object.entries(obj));	//here you go

console.log(user_map.get('name'));


// you can also print whole map
// user_map.forEach((value,key, map)=>{
// 	console.log(`${key} : ${value}`);
// });