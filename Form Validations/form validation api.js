function myfun(){
    var obj = document.getElementById("id1");
    
    if(!obj.checkValidity()){
        document.getElementById("demo").innerHTML=obj.validationMessage;
    }else{
        document.getElementById("demo").innerHTML="Input OK!";
    }
}