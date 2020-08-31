// JSON is data - only language - independent specification, so some JavaScript - specific object properties are skipped by JSON.stringify.

//     Namely:

// Function properties(methods).
// Symbolic properties.
// Properties that store undefined.

var user = {
    sayHi() {
        alert("Hello");
    },
    [Symbol("id")]: 123,
    something: undefined,
};

console.log(JSON.stringify(user));


// The important limitation: there must be no circular references.

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

try{
    JSON.stringify(meetup);  // Error: Converting circular structure to JSON
}catch(err){
    console.log(err);
}