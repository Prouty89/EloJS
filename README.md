# EloJS

## Random Notes 

# Let

- var vs let and block scoping (ES6 introduction)

# const

- Arrays and objects are reference types and can be added to or deleted from. const acts as a pointer to the values that exist in the array/object. 

# where you declare, mindful of scope. Declaring before you use

function doSmth() {
    age = 27; 
}

let age; declared prior to firing the function 
doSmth();
console.log(age);

= 27 

## fn() syntax
                function body *fat arrow allows you to delete the curly braces
var fn = (args) => {
    console.log('Hello);
};

console.log(fn());

## FE Masters Fundamentals of JS 

- Bianca Gando

- JS fundamentals, not about functional programming, it will prepare you if you decide to take the next step in that direction 

- Will use functional utility methods, implementing them. 

- functional utility methods
 - implementing those
 - applying JS fundementals throughout
 - use ES6 features


## What is functional Programming? 

- Programming style 

- Breaking up your code into verbs

- vs OOP breaking your code into nouns

- Applying it to the material of your HOUSE

- Heavy reliance on functions (hence the name)

- underscore, loDash, rambda utility libraries.

- Pure functions that don't have side-effects 

- You have to have side-effects in order to develop on the web, though. 

- Kyle Simpson, Dr. Boolean

## Assignments with Dots OBJECTS

var person = {};

person.name = "Mrs. White";

person.name; //??

evaluates to a string (Mrs. White)

person.name = "Mr. White";

who; //??

Evaluate and point to Mr. White

Primitive vs Non-primitive values **

Mutable vs immutable (Updatable information or not)

Arrays vs Objects, really the only difference is Arrays can have methods on them. .length property is IMPORTANT

# Bracket Notation 

-call a number of things within the brackets. 


Concatenate

