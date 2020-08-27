var f = 10.59698

document.getElementById("demo").innerHTML = "The Original Float is : "+f;
function change() {
    document.getElementById("demo1").innerHTML=
    "Number Fixed  >>> <br><br><br>"+
    "Zero Precision   : "+f.toFixed()+"<br>"+
    "One Precision    : "+f.toFixed(1)+"<br>"+
    "Two Precision    : "+f.toFixed(2)+"<br>"+
    "Three Precision  : "+f.toFixed(3)+"<br>"+
    "Four Precision   : "+f.toFixed(4)+"<br>";
}