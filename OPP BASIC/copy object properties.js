let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);


console.log(user.canView);
console.log(user.canEdit);

// second example

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);    //copy all properities in empty var

alert(user.sizes === clone.sizes);
