let user = {
  name: "John",
  age: 30
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); 
}