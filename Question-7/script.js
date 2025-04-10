// Q - 1  Write a function capitalizeNames that takes an array of names and returns a new array with each name capitalized.

let names = ['john', 'jane', 'doe'];

let capitalizeNames = names.map(item=>
 item.toUpperCase()
)
console.log("Q - 1 :- output")
console.log("New array with capitalized :-",capitalizeNames)


// Q  - 2 Write a function countWords that takes a sentence as input and returns the total number of words in the sentence.
let sentence = "javascript is Week language"
let  count= 1
function countWords(){
   for(let i=0;i<=sentence.length;i++){
    if(sentence[i] == " "){
        count++
    }
   }
   console.log(`The total Word in sentence : "${sentence} ":-`,count)
}
console.log("Q - 2 :- output")
countWords()


// Q - 3  Create a function findMinNumber that takes an array of numbers and returns the smallest number from the array using a for loop     

let array = [10,20,4,5,6,9,10]

function findMinNumber(){
    let smallest = Infinity
    for(let i=0;i<=array.length;i++){
        if(smallest > array[i]){
            smallest = array[i]
        }
    }
    console.log( "the smallest number in array is :-",smallest)
}
console.log("Q -3 :- output")
findMinNumber()



// Q - 4 Write a function printNumbers that takes a number n and prints all numbers from 1 to n using a while loop. 

function printNumbers(){
    let num = 1
    let printNum =10
    console.log(`number from ${num} to ${printNum} is :-` )
    while(num <= printNum ){
        console.log(num)
        num++
    }
    
}
console.log("Q - 4 :- output")
printNumbers()


// Q - 5 :  Write a function joinArrayToString that takes an array of strings and joins them into a single string with spaces in between using a for loop.

let words = ['I', 'love', 'coding']
let string = " "
function joinArrayToString(){
  for(let i=0;i<words.length ;i++){
    string += words[i]
    string += " "
  }
  console.log("converted form of  array into string whith for loop :-",string.trim())
}
console.log("Q - 5 :- output")
joinArrayToString()


// Q - 6 : Create a function calculateProduct that takes an array of numbers and returns the product of all the numbers using a while loop.

let numbers = [2, 3, 4];
function calculateProduct(){
    let i=0
    let product = 1
    while(i<numbers.length){
     product *= numbers[i]
     i++
    }
    console.log(product)
}
console.log("Q - 6 :-output")
console.log(`the product of number :- ${numbers} is :`)
calculateProduct()


// Q - 7 : Write a function removeSpaces that takes a string and removes all spaces from the string using a for loop.


let stringWithSpace = "I am a coder" 
let stringWithoutSpace = ""
function removeSpaces(){
  for(let i=0;i<stringWithSpace.length;i++){
    if(stringWithSpace[i] != " "){
    stringWithoutSpace += stringWithSpace[i]
    }
  }
  console.log(stringWithoutSpace)
}
console.log("Q - 7 :- output")
removeSpaces()
console.log(`string with space :-${stringWithSpace}, and after remove space with for loop is :-${stringWithoutSpace}`)


// Q - 8 : Create a function doubleNumbers that takes an array of numbers and returns a new array with each number doubled

let numbers2 = [1, 2, 3, 4]


let doubleNumbers = numbers2.map((item)=>{
    return item * 2
})
console.log("Q - 8 :- output")
console.log("After doubed all number present in array :-", doubleNumbers)


// Q - 9 Write a function printOddNumbers that prints all odd numbers between 1 and 10 using a while loop

function printOddNumbers(){
    let number = 1
    while(number <= 10){
        if(number % 2 != 0){
            console.log(number)
        }
        number++
    }
}
console.log("Q - 9 :- output")
console.log("All odd number between 1 to 10 is :-")
printOddNumbers()


// Q - 10 :  Create a function createIncrementer that returns another function. The returned function increments a counter each time it is called. Demonstrate using this function by calling it multiple times to show how closure works.



function createIncrementer(){
    let num = 0
    let i = 1
    
    
    if(i> num){
        function increment(){
        
           
            console.log(i)
            i++
        
    }
    increment()
    
    return i
    
}
}
    
    

console.log("Q - 10 : output")
let increment = createIncrementer()
console.log(increment)
console.log(increment())