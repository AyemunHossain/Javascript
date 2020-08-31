var userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

var user = JSON.parse(userData);

console.log(user.friends[1]);