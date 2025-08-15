class Person {  //Parent class
    constructor(name, age) {
        console.log('Student Constructor')
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`My name is ${this.name}`)
    }
}

class Student extends Person {  //Child
    constructor(name, age, marks) {
        console.log('Student Constructor')
        super(name, age);
        this.marks = marks;
    }
}
let s1 = new Student('Markus', 21, 89)

class Teacher extends Person {  //Child
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}
