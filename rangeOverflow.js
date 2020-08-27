function myFunction() {
    var txt;
    if (document.getElementById("id1").validity.rangeOverflow){
        txt = "Value is too high!!!"
    }else{
        txt = "Value is ok :)"
    }
    document.getElementById("demo").innerHTML = txt;
  }