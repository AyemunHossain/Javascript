function validateForm(){
    var  x = document.getElementById("fname").value;
    if (x == ""){
        console.log(x)
        document.getElementById("fn").innerHTML="Please Fill this field";
        return false;
    }
    else{
        document.getElementById("fn").innerHTML="Input Ok";
        return true;
    }
}