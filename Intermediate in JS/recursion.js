// PROBLEM:
//         A department may have an array of staff.For instance, sales department has 2 employees: John and Alice.

//         Or a department may split into subdepartments, like development has two branches: sites and internals.Each of them has their own staff.

//         It is also possible that when a subdepartment grows, it divides into subsubdepartments(or teams).

//         For instance, the sites department in the future may be split into teams for siteA and siteB.And they, potentially, can split even more.That’s not on the picture, just something to have in mind.

//         Now let’s say we want a function to get the sum of all salaries.How can we do that ?



SOLUTION:
let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function setAllSalary(department){
    if (Array.isArray(department)){
        return department.reduce((prev,curr)=>prev+curr.salary,0);
    }else{
        var sum = 0;
        for(var dep of Object.values(department)){
            sum += setAllSalary(dep);
        }
    }
    return sum;
}
console.log(setAllSalary(company));