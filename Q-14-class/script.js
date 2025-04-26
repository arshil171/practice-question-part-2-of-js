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



// Q - 2  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Ractangle {
    constructor(width , height){
        this.width = width
        this.height = height

    }
    ractangleArea(){
        console.log(`Area of Ractangle :- Width * height = ${this.width} * ${this.height} = `, this.width*this.height )
    }
    ractanglePerimeter(){
        console.log(`perimeter of Ractangle :- 2*Width + 2*height = 2 * ${this.width} + 2 * ${this.height} = `,2* this.width+ 2*this.height)
    }
}
console.log("Q - 2 :- output")

let ractangle1 = new Ractangle(20 , 30)
console.log(ractangle1)
ractangle1.ractangleArea()
ractangle1.ractanglePerimeter()

let ractangle2 = new Ractangle(40 , 10)
console.log(ractangle2)
ractangle2.ractangleArea()
ractangle2.ractanglePerimeter()



// Q - 3 Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(name, model,year){
        this.name = name
        this.model = model
        this.year = year
    }
    displayVehicleDetail (){
        console.log( `Vhicle name :- ${this.name}  , Model of Vehicle :- ${this.model} , Launch Year of Model :- ${this.year}`)
    }
}
class Car extends Vehicle {
    constructor(name,model,year,doors){
        super(name,model,year,doors)
        this.doors = doors
    }
    displayVehicleDetail(){
        console.log( `car name :- ${this.name}  , Model of Vehicle :- ${this.model} , Launch Year of Model :- ${this.year}  , vehicle doors :- ${this.doors}`)
    }
}

console.log("Q - 3 :- output")
let vehicle1 = new Vehicle("Tesla" , "Tesla 2.0" , 2010)
console.log(vehicle1)
vehicle1.displayVehicleDetail()
let toyota = new Car("Toyota" , "toyota 1.0", 2013 , 4)
console.log(toyota)
toyota.displayVehicleDetail()


// Q - 4 Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it

class BankAccount{
    constructor(accountNo ,balance){
        this.accountNo = accountNo
        this.balance = balance
    }
    deposit(depositAmount){
       this.balance += depositAmount
       console.log("Deposit Amount is :-", depositAmount)
       console.log(`After deposit Money in account your balance :- ${this.balance}`)
    }
    withdraw(withdrawAmount){
        this.balance -= withdrawAmount
        console.log("whithdraw Amount is :-",withdrawAmount)
        console.log(`After withdraw Money from account remaining balance :- ${this.balance}`)
    }
}
console.log("Q - 4 :- output")

let account1 = new BankAccount(120304567 , 3000)
console.log(account1)
account1.deposit(2000)
account1.withdraw(4000)

let account2 = new BankAccount(1203045964 , 9000)
console.log(account2)
account2.deposit(8000)
account2.withdraw(17000)




// Q - 5 Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.




class Shape{ 
    calculateArea(){
       return 0
    }
}
class Circle extends Shape{
    constructor(radius){
       super(radius)
       this.radius= radius
    }
    calculateArea(){
        
      console.log("Area of Circle is :- 3.14 * r * r = " , 3.14 * this.radius * this.radius )

    }
}
class Triangle extends Shape{
    constructor(base , height){
        super(base,height)
        this.base= base
        this.height = height
    }
    calculateAreaTriangle(){
        console.log("Area of triangle :- 1/2 * b * h =",1/2 * this.base * this.height)

    }
}
console.log("Q - 5 :- output")

let circle1 = new Circle(12)
console.log(circle1)
circle1.calculateArea()

let circle2 = new Circle(14)
console.log(circle2)
circle2.calculateArea()


let triangle1 = new Triangle(14 , 17)
console.log(triangle1)
triangle1.calculateAreaTriangle()

let triangle2 = new Triangle(19 , 13)
console.log(triangle2)
triangle2.calculateAreaTriangle()