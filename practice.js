// Core Data Structures

//Objects and Arrays

var person = []; //brackets will 

person.name = "Mrs. White";

var who = person.name; 

// var person = {
//     name : "Mrs. White" // Object literal
// };

who.story; //?? 

typeof person === "array"; //?? will return false, still an object even though it is assigned to []. Arrays are just objects fundementally. 


// Brackets

var person = [];

person.name = "Mrs. White";

var who = person.name; 

person[0] = "I was not in the Billiards room";

// When the value is not supposed to be a string literal you will find yourself using bracket notation rather than dot notation

var person = [];
var plea = "wouldShe"

person.name = "Mrs. White";

person["plea"] = "I would never!";

