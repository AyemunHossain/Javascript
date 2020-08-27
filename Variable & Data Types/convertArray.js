var students = ["Ashik","Asif","Alif"];
var students2 = ["Atif","Afif","Ariyan"]
document.getElementById("demo").innerHTML = "List 1 : "+students.join(" , ") +"<br>List 2 : "+students2.join(" ,  ");

function change() {
    var all_student = students.concat(students2)
    document.getElementById("demo1").innerHTML = all_student.join(" , ");
}