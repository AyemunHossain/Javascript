function change(who){
            change.count++;

            if (who == 1){
                document.getElementById("p1").innerHTML = "<h1>Channged in Heading 1</h1>";
            }
            if (who == 2){
                document.getElementById("p1").innerHTML ="<h6>Channged in Heading 6</h6>" ;
            }

        }