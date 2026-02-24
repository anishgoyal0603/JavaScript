let obj1 = {
        name: "Anish",
        age: 25,
        role: "Admin"
    }

const {role} = obj1 // order doesn't matter
console.log(role);

const {age : myAge = 19,name} = obj1 // age is not in scope (it doesn't exists , only myAge exists)
//console.log(age) // ReferenceError: age is not defined
console.log(myAge);
console.log(name);



    