// javascript variable types and typescasting 

var person = {name:'ashik',id:2408};

person = null;
console.log("person typeof "+typeof(person));

person = undefined;
console.log("person typeof "+typeof(person));

person = 1
console.log("person typeof "+typeof(person));

var id = 0;
console.log("id typeof "+typeof(id));

id = {name:'ashik', id:222}
console.log("id typeof "+typeof(id));

// try with function 
function get(){
    return 0
}

function put(){
    
}
console.log("get() typeof "+typeof(get()));                     // will be the type of return type
console.log("get() typeof "+typeof(get));                        // will be the type of functon 

console.log("get() typeof "+typeof(put()));                     // non type coz funtion didn't return aything  

console.log("typeof "+typeof(function myFunc(){}))              // will be the type of funtion 

console.log("typeof "+typeof(function myFunc(){ return 0}))     // will be the type of funtion, it doesn't care about return type 


