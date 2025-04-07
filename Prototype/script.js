//  Q - 1  Vehicle Constructor
// Question:Create a Vehicle constructor function in JavaScript that takes type, wheels, and speed as parameters. Use the prototype to add a method called describe that prints out, "This is a [type] with [wheels] wheels, and it can go up to [speed] km/h."


function Vehicle(type,wheels,speed){
    this.type = type
    this.wheels = wheels
    this.speed = speed
}
Vehicle.prototype.describe = function(){
    console.log(`This is a ${this.type} with ${this.wheels} wheels, and it can go up to ${this.speed} km/h.`)
}
console.log("Q - 1 :- output")
let car = new Vehicle("car" , 4 , 170)
car.describe()
let bike = new Vehicle("Bike", 2 , 130)
bike.describe()


// Q - 2  Library Book Constructor
Question:
// Design a Book constructor function that accepts title, author, and year. Add a prototype method called getBookInfo that returns a string like, "Title: [title], Author: [author], Year: [year].

function Book(title,author,year){
    this.title = title
    this.author = author
    this.year = year
}
Book.prototype.getBookInfo = function(){
    return `title : ${this.title} , Author : ${this.author} , Year : ${this.year}`
}
console.log("Q - 2 :- output")

let book1 = new Book("To kill a Mockingbird" , "Harper lee" , 2013)
console.log(book1.getBookInfo())

let book2 = new Book("1984" , "George Orwell", 1990)
console.log(book2.getBookInfo())


// Q - 3  Bank Account Constructor
Question:
// Build a BankAccount constructor function with accountNumber, balance, and accountHolder as properties. Add a prototype method deposit(amount) that increases the balance by the given amount and logs the new balance

function BankAccount(accountNumber , balance , accountHolder){
    this.accountNumber = accountNumber
    this.balance = balance
    this.accountHolder = accountHolder
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount
    console.log(`New balance after upadation of ${this.accountHolder} :- `,this.balance)
}
console.log("Q - 3 :- output")

let account1 = new BankAccount(1238574630086 , 4000 , "Arshil")
account1.deposit(5000)

let account2 = new BankAccount(2384859647599 , 5000 , "Param")
account2.deposit(9000)



// Q - 4 Employee Constructor
// Question:
// Create an Employee constructor function with name, position, and salary properties. Use prototypes to add a giveRaise method that increases the employee's salary by a given percentage and logs the updated salary.


function Employee(name,position,salary){
    this.name =name
    this.position = position
    this.salary = salary
}
Employee.prototype.giveRise = function(percentage){
    this.salary += this.salary * (percentage / 100)
    console.log(`New Salary of ${this.name} :- `, this.salary)
}
console.log("Q - 4 :- output")

let emp1 =new  Employee("Arshil" , "Hr" , 50000)
emp1.giveRise(10)

let emp2 = new Employee("krrish" , "Senior-manager" , 40000)
emp2.giveRise(8)


// Q - 5 Movie Constructor
// Question:
// Construct a Movie function that takes in title, genre, and rating as parameters. Use the prototype to add a method rate(newRating) that updates the movie's rating and logs, "The new rating for [title] is [newRating]."

function Movie(title, genre ,rating){
    this.title =title
    this.genre = genre
    this.rating = rating
}
 
Movie.prototype.rate = function(newRating){
    this.rating = newRating
    console.log(`New rating of ${this.title} is :- `, newRating)
}
console.log("Q - 5 :- output")

let movie1 = new Movie("Past Lives" , "Drama" , 9)
movie1.rate(7.9)
let movie2 = new Movie("Killers of the Flower Moon" , "crime , Drama" , 8)
movie2.rate(7.6)