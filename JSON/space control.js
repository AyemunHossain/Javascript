let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user, null, 2));

console.log(JSON.stringify(user, null, 4)); //with more indented string
