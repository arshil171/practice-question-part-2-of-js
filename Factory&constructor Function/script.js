//  Factory Function 


// Q - 1  E-commerce Inventory Management:
// Question: Imagine you have an e-commerce site that sells electronics. You need a function that creates a product with properties like name, price, and category. Create a factory function called createProduct that returns an object for each product. Hint: Think of the factory function as a "blueprint" that creates different product objects with specified properties

function createProduct(name ,price,category){
    let object = {}
    object.name = name
    object.price = price
    object.category = category
  
    return object
  }
  console.log("Q - 1 :- Output")
  let mobile = createProduct("Radmi" , 20000 , "mobile phone")
  console.log(mobile)
  
  let laptop = createProduct("victus" , 72000 , "laptop")
  console.log(laptop)
  
  
  
  
  
  // Q - 2   Student Report Card Generator:
  // Question: Write a factory function createReportCard that generates a report card for each student with properties such as name, grade, and subject. This function should return an object for each student. Hint: Each student can have different grades, so think about how each object represents an individual student's information.
  
  
  
  function createReportCard(name,grade,subject){
    let object= {}
    object.name= name
    object.grade = grade
    object.subject = subject
  
    return object
  }
  console.log("Q - 2 :- output")
  
  let student1 = createReportCard("Arshil", "A+" ,"maths")
  console.log(student1)
  
  let student2 = createReportCard("Param" , "B+" , "Physics")
  console.log(student2)
  
  
  // Q - 3 Car Rental Service:
  // Question: Suppose you run a car rental service. Write a factory function createCar that creates a car object with properties like model, rentalRate, and availability. Use this to generate car instances for each vehicle in your fleet. Hint: Each car will have different values for these properties, so use a function that takes parameters for each property
  
  function createCar(model,rentalRate,availability){
    let object = {}
    object.model = model
    object.rentalRate = rentalRate
    object.availability = availability
  
    return object
  }
  
  console.log("Q - 3 :- output")
  
  let car1 = createCar("TaTa Punch" , 2000 , "10:00 AM to 05:00 PM")
  console.log(car1)
  
  let car2 = createCar("Maruti Brezza" , 3000 , "05:00 PM to 10:00 AM")
  console.log(car2)
  
  
  // Q - 4  Library Book Generator:
  // Question: Create a factory function createBook that generates a book object with properties such as title, author, ISBN, and availableCopies. Use this function to add books to a library inventory. Hint: Each book should have unique details, so think about how to pass these as arguments to the function.
  
  
  function createBook(title,author,ISBN , availableCopies){
    let object = {}
    object.title = title
    object.author = author
    object.ISBN = ISBN
    object.availableCopies = availableCopies
  
    return object
  }
  
  console.log("Q - 4 :- Output")
  
  let book1 = createBook("To kill a Mockingbird" , "Harper lee" , "978-0-06-112008-4" , 50)
  console.log(book1)
  
  let book2 = createBook("1984" , "George Orwell" , "978-0-452-28423-4" , 100)
  console.log(book2)
  
  
  // Q - 5 Employee Badge Creator:
  // Question: Your company needs to generate badges for employees with properties like name, id, department, and position. Write a factory function createEmployeeBadge that returns an employee badge object. Hint: Use parameters in your factory function to create unique badge information for each employee
  
  function createEmployeeBadge(name , id , department ,position){
    let object = {}
    object.name = name 
    object.id = id
    object.department = department
    object.position = position
  
    return object
  }
  
  console.log("Q - 5 :- output")
  
  let employee1 = createEmployeeBadge("Arshil" , 1 , "Information-Technolgy ", "HR-manager" ) 
  console.log(employee1)
  
  let employee2 = createEmployeeBadge("Dhruv",2 , "Electrical" , "Senior-Employee")
  console.log(employee2)
  
  
  // constructor Function 
  
  //  Q - 1 Hotel Room Reservation System:
  //  Question: Suppose you’re building a reservation system for a hotel. Write a constructor function Room that creates a room object with properties like roomNumber, type, price, and isAvailable. Hint: Use the new keyword to create new room objects.
  
  
  
  function RoomReservation(roomNumber,type,price,isAvailable){
    this.roomNumber = roomNumber
    this.type = type
    this.price = price
    this.isAvailable = isAvailable
  }
  
  console.log("constructor Function")
  
  console.log("Q - 1 :- output")
  
  let room1 = new RoomReservation(1002 , "AC" , 2000 , "YES")
  console.log(room1)
  
  let room2 = new RoomReservation(2004 , "NON-AC", 1300 , "NO")
  console.log(room2)
  
  let room3 = new RoomReservation(2008, "NON-AC",1300 , "YES")
  console.log(room3)
  
  
  
  // Q - 2 Online Course Management:
  // Question: Design a constructor function Course that generates an object representing an online course with properties like title, instructor, duration, and studentsEnrolled. Hint: Use the this keyword to assign values to each property.
  
  
  function Course(title , instructor , duration , studentsEnrolled){
    this.title = title
    this.instructor = instructor
    this.duration = duration
    this.studentsEnrolled = studentsEnrolled
  }
  
  console.log("Q - 2 :- output")
  
  let course1 = new Course("Graphic Designing" , "Arshil" , "13 - months" , 23)
  console.log(course1)
  
  let course2 = new Course("Full Stack Development", "Dhruv", "15 - months", 45)
  console.log(course2)
  
  let course3 = new Course("Cyber Security", "krrish", "13 - months", 10)
  console.log(course3)
  
  
  
  // Q - 3 Digital Wallet:
  // Question: Create a constructor function Wallet that initializes a wallet object with properties like ownerName, balance, and currency. Include a method that allows the owner to add money to the wallet. Hint: Add methods inside the constructor to handle wallet operations
  
  
  function Wallet(ownerName , balance,currency){
    this.ownerName =ownerName
    this.balance = balance
    this.currency = currency
    this.addMoney = 0
    this.addMoneyWallet = function (amount) {
       this.addMoney += amount
       this.balance += this.addMoney
      //  console.log(amount)
      //  return this.addMoney
      }
  }
  
  
  console.log("Q - 3 :- output")
  
  let wallet1 = new Wallet("Arshil", 5000 , "$" )
  
  console.log(wallet1.addMoneyWallet(3000))
  
  
  console.log(wallet1)
  
  let wallet2 = new Wallet("Krrish", 3000, "Rupppes")
  console.log(wallet2.addMoneyWallet(5000))
  console.log(wallet2)
  
  
  
  
  // Q - 4 City Weather Tracker:
  // Question: Write a constructor function Weather that creates a weather object with properties like city, temperature, humidity, and forecast. Create a method to update the forecast. Hint: Use the constructor to set initial values, and add a method to update properties.
  
  function Weather(city,temperature,humidity,forecast){
    this.city = city
    this.temperature = temperature
    this.humidity = humidity
    this.forecast = forecast
  
    this.updateForecast= function(updateForecastValue) {
      this.forecast += updateForecastValue
    }
  
  }
  console.log("Q - 4 :- output")
  let Weather1 = new Weather("Ahmedabad",  "30 C", "16%" ,36 )
  console.log("before upadation of forecast")
  console.log(Weather1)
  Weather1.updateForecast(2)
  console.log("after update forcast")
  console.log(Weather1)
  
  
  
  // Q - 5  School Student Enrolment:
  // Question: Write a constructor function Student that generates a student object with properties name, rollNumber, grade, and subjects. Add a method to add new subjects to the student’s subject list. Hint: Use the new keyword to create each student, and add a method to modify the object’s state
  
  
  
  function Student(name, rollNumber, grade, subjects) {
    this.name = name
    this.rollNumber = rollNumber
    this.grade = grade
    this.subjects =  subjects ||[] 
  
    
    this.addSubject = function(newSubject) {
        this.subjects.push(newSubject)
    };
  }
  
  console.log("Q - 5 :- output")
  
  let student3 = new Student('Alice Johnson', 101, '10th Grade', ['Math', 'Science']);
  
  
  student3.addSubject(',History ' )
  
  
  
  console.log(student3);