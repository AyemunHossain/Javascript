const name = "ashik"    //all over global and local scope it's constant

var result = 3.33;

{
    const result = 4.00;
    // in this block scope it's constant 
}

//result is not constant here 


const car = {type:"Fiat", model:"500", color:"white"}; //const object is not actually contant

//--> you can add, remove, change 
//--> but can't re assign whole object
// same for CONST ARRAY 

//CONST --> LET (not allowed)
//LET -->CONST (not allowed)



//more const
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}