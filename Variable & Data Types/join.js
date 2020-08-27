var students = ["Ashik","Asif","Alif","Atif","Afif","Ariyan"];
document.getElementById("demo").innerHTML = "Original Array : "+students;

function change() {
    document.getElementById("demo1").innerHTML = "Joined array : "+students.join(" - ");
}