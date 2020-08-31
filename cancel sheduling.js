//canceling timeout 

let timerId = setTimeout(() => console.log("HI"), 5000);
clearTimeout(timerId);