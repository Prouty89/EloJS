// Clue Game exercise

// Create an object using bracket and dot notation that represents the characters and related data you may find in the game of Clue

// let game = {};

// game.murderer = "??";

//Bracket Notation
// game['weapons'] = [
//     {type: 'lasers', location: 'lab'},
//     {type: 'angry cat', location: 'foyer'},
//     {type: 'dish soap', location: 'kitchen'},
// ]

// //Dot Notation
// game.names = [];
// game.name[0] = "Scarlett";
// // or
// game.name.push('Mr. Green');
//res ['Scarlett', 'Mr.Green']

//  /** DESTRUCTURING OBJECTS and ARRAYS */

//  var obj = { first: 'Dan', last: 'Coelho'}
//  var first = obj.first;
//  var last = obj.last; 

 //Solve repeating yourself by destructuring

const [first, second] = [true, false];

let [first, second] = [true, false]; 

//assignment: 

[first, second] = [true, false];





// // Core Data Structures

// //Objects and Arrays

// var person = []; //brackets will 

// person.name = "Mrs. White";

// var who = person.name; 

// // var person = {
// //     name : "Mrs. White" // Object literal
// // };

// who.story; //?? 

// typeof person === "array"; //?? will return false, still an object even though it is assigned to []. Arrays are just objects fundementally. 


// // Brackets

// var person = [];

// person.name = "Mrs. White";

// var who = person.name; 

// person[0] = "I was not in the Billiards room";

// // When the value is not supposed to be a string literal you will find yourself using bracket notation rather than dot notation

// var person = [];
// var plea = "wouldShe"

// person.name = "Mrs. White";

// person["plea"] = "I would never!";

// // Non-valid Characters 

// var box = {};

// box['material'] = "cardboard";
// box[0] = 'meow';
// box['^*'] = "testing 123";

// var test = box['^&*'];

// box = {
//     "material" : "cardboard",
//     "0" : "meow",
//     "^&*" : "testing 123" 
// }