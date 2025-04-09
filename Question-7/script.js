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
countWords()


// Q - 3  Create a function findMinNumber that takes an array of numbers and returns the smallest number from the array using a for loop     

let array = [10,20,4,5,6,9,10]

function findMinNumber(){
    let smallest = Infinity
    for(let i=0;i<=array.length;i++){
        if(array[i] > Infinity){
            smallest = array[i]
        }
    }
    console.log(smallest)
}

findMinNumber()