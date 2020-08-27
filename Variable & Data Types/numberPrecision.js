var f = 10.596984892

document.getElementById("demo").innerHTML = "The Original Float is : "+f;
function change() {
    document.getElementById("demo1").innerHTML=
    "Number Precision : <br>"+
    "Zero precision : "+f.toPrecision()+"<br>"+
    "One precision : "+f.toPrecision(1)+"<br>"+
    "Two precision : "+f.toPrecision(2)+"<br>"+
    "Three precision : "+f.toPrecision(3)+"<br>"+
    "Four precision : "+f.toPrecision(4)+"<br>"+
    "Five precision : "+f.toPrecision(5)+"<br>"+
    "Six precision : "+f.toPrecision(6)+"<br>"+
    "Seven precision : "+f.toPrecision(7)+"<br>"+
    "Eight precision : "+f.toPrecision(8)+"<br>";
    
}