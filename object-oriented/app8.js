class User {
    // 1. PUBLIC FIELD (No keyword needed)
    name ; // if I write let name or var name or const name it shows error

    // 2. PRIVATE FIELD (Must start with #)
    #salary;

    // 3. "PROTECTED" (Convention only, actually public)
    _familySecret; 

    constructor(name, salary, secret) {
        this.name = name;           // Accessible everywhere
        this.#salary = salary;      // Accessible ONLY inside this class
        this._familySecret = secret;// Accessible everywhere (but please don't)
    }

    getSalary() {
        // Can access #salary because we are inside the class
        return `Salary is ${this.#salary}`;
    }
}

const u1 = new User("Hitesh", 50000, "I love pizza");

// ✅ PUBLIC: Works fine
console.log(u1.name); 

// ⚠️ PROTECTED (Fake): Works, but you shouldn't do it
console.log(u1._familySecret); 

// ❌ PRIVATE: CRASHES 
// console.log(u1.#salary); // SyntaxError: Private field '#salary' must be declared in an enclosing class


