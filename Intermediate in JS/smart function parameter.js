
var options = {
    title: "My menu",
    item: "Potato"
};

function showMenu({ title = "Untitled", width = 200, height = 100, item }) {


    console.log(`${title} ${width} ${height}`);
    console.log(item);
}

showMenu(options);