/* I have use here two variable in global scope */
var g_one = 10;                 //global variable
window.g_two = 101111;          //also global variable
function change() {
    alert(g_one);
    alert(g_two);
}