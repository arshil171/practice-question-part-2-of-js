// Q - 1 Create a Library Object:
// A library needs to store books with their titles and authors. Create an object with a method that accepts an array of book titles and their authors, and adds them to the library's collection.
let array2 = [
    { "title": "To Kill a Mockingbird", "author": "Harper Lee" },
    { "title": "1984", "author": "George Orwell" },  
    { "title": "Pride and Prejudice", "author": "Jane Austen" },
    { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
    { "title": "Moby-Dick", "author": "Herman Melville" },   
    { "title": "The Catcher in the Rye", "author": "J.D. Salinger" },
    { "title": "The Hobbit", "author": "J.R.R. Tolkien" },
    { "title": "War and Peace", "author": "Leo Tolstoy" },
    { "title": "The Odyssey", "author": "Homer" },
    { "title": "The Chronicles of Narnia", "author": "C.S. Lewis" }   
]

let library =   {
    books: [] ,
    addBooks: function () {
        for (let i = 0; i < array2.length; i++) {
            this.books.push(array2[i])

        }
        return this.books


    }
}

console.log("Q - 1 : output")
console.log(library.addBooks())




// Q - 2  Create an object that has a method
//  to find the most frequent color from an array of colors like ["red", "blue", "red", "green", "blue", "blue"].

let countRed = 0
let countBlue = 0
let countGreen = 0
let frequentColor = {
  colors: ["red", "blue", "red", "green", "blue", "blue"],
  frequentColors: function () {
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i] === "red") {
        countRed++
      }
      else if (this.colors[i] === "blue") {
        countBlue++
      }
      else if (this.colors[i] === "green") {
        countGreen++

      }
    }
  },
  mostFrequentColor: function () {

    if (countRed > countBlue) {
      if (countRed > countGreen) {
        console.log("Red is most frequent color in array")
      }
      else {
        console.log("Green is most frequent color in array")
      }
    }
    else {
      console.log("Blue is most frequent color in array")
    }
  }
}
frequentColor.frequentColors();
console.log("Q - 2 : output")
frequentColor.mostFrequentColor();


// Q - 3 . Student Gradebook:
// Create an object gradebook that stores students' names and their grades. It should have a method that accepts an array of students' names and grades, and returns an object where the student’s name is the key, and their grade is the value.
// ```javascript
// const gradebook = {
//     addGrades: function(gradeArray) {
//         // Logic to store grades for each student
//     }
// };
 


  

const gradebook = {
  students: {},

  addGrades: function (studentsArray) {
    studentsArray.forEach(student => {
      const [name, grade] = student;
      this.students[name] = grade;
    });
    return this.students;
  }
};


const studentsArray = [
  ['Alice', 90],
  ['Bob', 85],
  ['Charlie', 92]
];
console.log("Q - 3 : output")
console.log(gradebook.addGrades(studentsArray));
  

// Q - 4 Create an object shoppingCart that accepts an array of product names and returns an object showing how many times each product appears in the cart.
const productsArray = [
  "Smartphone",
  "Laptop",
  "Smartphone",
  "Wireless Headphones",
  "Laptop",
  "Smartwatch",
  "Smartphone"
];
shoppingCart = {
   items :{},
   addProduct : function (){
    productsArray.forEach((product)=>{
     this.items[product] =(this.items[product] || 0) +1
    })
    return this.items
   }
   
}
console.log("Q - 4 : output")
console.log(shoppingCart.addProduct())


// Q - 5 Write an object letterCounter that accepts a string and returns an object showing the frequency of each letter in the string.



const letterCounter = {
   object : {},
   string : "Hello i am  from javascript",
   freqencyLetter : function(){
    for(let i=0;i<this.string.length;i++){
      if(this.object[this.string[i]]==undefined){
        this.object[this.string[i]] = 1
      }
      else
      {
        this.object[this.string[i]]++
      }
    }
    
    return this.object
   }
}
console.log("Q - 5 : output")
console.log(letterCounter.freqencyLetter())

// Q - 6 find out frequency of number in array [ 1,3,4,6,3,4,5,3,4,]

let array6 = [1, 3, 4, 6, 3, 4, 5, 3, 4];
let frequency = {};

for (let i = 0; i < array6.length; i++) {
  if (frequency[array6[i]] == undefined) {
    frequency[array6[i]] = 1;
  } else {
    frequency[array6[i]]++;
  }
}
console.log("Q - 6 :- output")
console.log(frequency)



// Q - 7 find the sum of elements whose occurrence is 2 or more than 2.



let arr = [1, 2, 3, 4, 5, 2, 2, 6, 7, 8, 2, 2, 9, 3, 3, 5, 5, 9, 8];
let object = {};

for (let i = 0; i < arr.length; i++) {
  if (object[arr[i]] == undefined) {
    object[arr[i]] = 1;
  } else {
    object[arr[i]]++;
  }
}
console.log("Q - 7 :- output")
console.log(object);

let sum = 0;

for (let key in object) {

  if (object[key] >= 2) {
    sum += Number(key);
  }
}
console.log("the sum of is occurance is 2 or more then 2 :-",sum); 