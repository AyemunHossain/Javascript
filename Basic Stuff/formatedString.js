var students = ["Ashik","Asif","Alif","Atif","Afif","Ariyan"];
        document.getElementById("demo").innerHTML = "All student : "+students.join(" ,  ");

        function change() {
            document.getElementById("demo1").innerHTML = "Formated Sting : "+students.toString();
      }