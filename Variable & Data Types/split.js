function change() {
    var arr = "Ashik";
    var sp = arr.split("");
    var text = "";
    var i =0;
    for (i=0; i<sp.length; i++){
        text+=arr[i]+"<br>";
        }
    document.getElementById("demo").innerHTML=text;
    }