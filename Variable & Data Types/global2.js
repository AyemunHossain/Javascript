function attendance() {
    window.st_id = 2408;
}

function result() {
    attendance();
    alert(`From global scope ID : ${st_id}`);
}
