function validateForm(){
    var  x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Fist Name must be filled out");
        return false;
    }
}