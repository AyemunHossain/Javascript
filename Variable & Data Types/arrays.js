function change() {
    var students = ["Ashik","Asif","Alif","Atif","Afif","Ariyan"];
    var i =0;
    text = "<ul>";
    for (i =0; i<students.length-1; i++){
        text +="<li>"+students[i]+"</li>";
    }
    text+="</ul>";
    document.getElementById("demo1").innerHTML = text;
}