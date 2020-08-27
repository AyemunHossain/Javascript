var name = "Please locate where 'locate' occurs";

console.log(name.indexOf("where"))
console.log(name.lastIndexOf("where"))

console.log(name.search("occurs"))

console.log(name.slice(-14,-8))
console.log(name.slice(7))          // 7 to rest of string

console.log(name.substring(7, 13))

console.log(name.replace('where','when'))