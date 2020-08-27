let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// let's iterate over map

//see values 
for (let item of recipeMap.values()){
	console.log(item);
}

//see keys
for (let key of recipeMap.keys()){
	console.log(key);
}


//see all entry
for (let entry of recipeMap){
	console.log(entry);
}


// printing like pro :))

recipeMap.forEach((value,key, map)=>{
	console.log(`${key} : ${value}`);
});