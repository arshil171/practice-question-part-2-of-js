// Q-1 Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details

class Person{
    constructor(name,age,country){
        this.name = name 
        this.age = age
        this.country = country
    }
    displayPersondetail(){
        
     console.log(` person   --- Name :- ${this.name} , Age :- ${this.age} , Country :- ${this.country}`)
    }
}

// class person1 extends Person {
//     constructor(name,age,country){
//         super(name,age,country)
//     }
// }
let person1 = new Person("Arshil" , 20 , "India")
console.log(person1)
person1.displayPersondetail()

let person2 = new Person("param" , 75 , "Africa")
console.log(person2)
person2.displayPersondetail()