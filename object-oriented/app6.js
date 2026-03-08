class Student{
    constructor(userName,password)
    {
        this.userName = userName
        this.password = password
    }
    display()
    {
        console.log(this.userName,this.password)
    }
}

let s1 = new Student("name",123)
s1.display()
console.log(s1 instanceof Student)
let s2 = Student("name",123) // TypeError: Class constructor Student cannot be invoked without 'new'

console.log(s2)


