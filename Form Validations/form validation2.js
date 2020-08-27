function myFunction(){
    var temp,text;
    temp = document.getElementById("numb").value;
    if (isNaN(temp) || temp<1 || temp>10){
        text = "Input Wrong try 1 to 10";
    }
    else{
        text = "Input Ok";
    }
    document.getElementById("demo").innerHTML=text;
}