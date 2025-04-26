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

// Q - 6 Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
    constructor(name , salary){
        this.name = name
        this.salary = salary
    }
    calculateAnnualSalary(){
     let   totalSalary = this.salary
    }

}
class Manager extends Employee {
    constructor(name , salary , department){
        super(name,salary,department)
        this.department = department
    }
    calculateAnnualSalary(bonus){
        console.log("bonus is :-" , bonus)
      let  totalSalary = this.salary + bonus
        console.log(`annual salary of manager with bonus  is :-`,totalSalary)
    }

}
console.log("Q - 6 :- output")
let manager1 = new Manager("Arshil" , 20000 , "computer Engineering")
console.log(manager1)
manager1.calculateAnnualSalary(4000)

let manager2 = new Manager("Param" , 24000 , "Information Technology")
console.log(manager2)
manager2.calculateAnnualSalary(7000)


// Q - 7 Write a JavaScript program that creates a class Book with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
    constructor(title , author , publicationYear){
        this.title = title
        this.author = author
        this.publicationYear = publicationYear
    }
    displayBookDetail(){
        console.log(`Book title is :- ${this.title}  , Book author is :- ${this.author}  , Year of publication is :- ${this.publicationYear}` )
    }
}
 
class Ebook extends Book{
    constructor(title, author , publicationYear,price){
        super(title , author, publicationYear, price)
        this.price = price
    }
    displayBookDetail(){
        console.log(`Book title is :- ${this.title}  , Book author is :- ${this.author}  , Year of publication is :- ${this.publicationYear} ,Book price is :- ${this.price}` )
    }
}
console.log("Q - 7 :- output")
let ebook1 = new Ebook ("My Journey" , "Abdual Kalam A P J " , 2010 , 295)
console.log(ebook1)
ebook1.displayBookDetail()

let ebook2 = new Ebook ("Simplify" , "Captain Gopinath " , 2008 , 265)
console.log(ebook2)
ebook2.displayBookDetail()

// Q - 8 Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound

class Animal {
    constructor(species , sound){
        this.species = species
        this.sound = sound
    }
    animalSound(){
        console.log("sound is :-" , this.sound)
    }
}
class Dog extends Animal {
    constructor(species , sound , color){
        super(species , sound , color)
        this.color =  color

        
    }
    animalSound(){
        console.log("the sound of dog is :-" , this.sound)
    }
}
console.log("Q - 8 :- output")
let dog1 = new Dog("jurmon Saffor" , "Bhow - Bhow " , "red")
console.log(dog1)
dog1.animalSound()

let dog2 = new Dog("Labrador" , "Bhow - Bhow " , "Brown")
console.log(dog2)
dog2.animalSound()


// Q - 9 Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.


class Bank {
    constructor(name) {
      this.name = name;
      this.branches = [];
    }
  
    addBranch(branch) {
      this.branches.push(branch);
    }
  
    removeBranch(branch) {
      this.branches = this.branches.filter(b => b !== branch);
    }
  
    displayBranches() {
      console.log(`Branches of ${this.name}:`, this.branches.join(", "));
    }
  }
  
  console.log("Q - 9 :- output")
  const bank = new Bank("Bob");
  
  bank.addBranch("Changoder");
  bank.addBranch("bopal");
  bank.addBranch("bavla");
  
  bank.displayBranches(); 
  
  bank.removeBranch("Changoder");
  
  bank.displayBranches()

// Q - 10 Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.


class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }

    calculateTotalPrice(quantity) {
      return this.price * quantity;
    }
  }

  class PersonalCareProduct extends Product {
    constructor(id, name, price, warrantyPeriod) {
      super(id, name, price); 
      this.warrantyPeriod = warrantyPeriod;
    }
  
 
    calculateTotalPrice(quantity) {
      const baseTotal = super.calculateTotalPrice(quantity);
      const warrantyCharge = this.warrantyPeriod * 50;
      return baseTotal + warrantyCharge;
    }
  }
  console.log("Q - 10 :- output")
  const shampoo = new PersonalCareProduct(101, "Herbal Shampoo", 200, 2);
  
  const quantity = 3;
  const totalPrice = shampoo.calculateTotalPrice(quantity);
  
  console.log(`Total price for ${quantity} ${shampoo.name}(s): ₹${totalPrice}`);