//COnstuctor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this)
    }
    talk() {
        console.log(`Hii I am ${this.name}`)
    }
}



//p1 is Instances

let p1 = new Person('Adam', 21)
let p2 = new Person('Eve', 20)