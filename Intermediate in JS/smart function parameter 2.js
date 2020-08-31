
options = {
title: "My menu",
    items: ["Item1", "Item2"],
};

function showMenu({
    title = "Untitled",
    width: w = 100,  
    height: h = 200,
    items: [item1, item2] 
}) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1); 
    console.log(item2);
}

showMenu(options);