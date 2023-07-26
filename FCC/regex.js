let testStr = "freeCodeCamp";

let testRegex = /Code/;
console.log(testRegex.test(testStr)); // true

let testRegex2 = /code/;
console.log(testRegex2.test(testStr)); // false

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result); //true;

let testStr3 = "Hello, my name is Kevin.";
let testRegex3 = /Kevin/;
let result3 = testRegex3.test(testStr3);
console.log(result3); //true

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr)); // false

let myCompleteName = "Davi";
let myName = /Davi/;
console.log(myName.test(myCompleteName)); //true

let myWrongName = /Luciano/;
console.log(myWrongName.test(myCompleteName)); // false

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result4 = waldoRegex.test(waldoIsHiding);
console.log(result4); //true

/*
Your regex petRegex should return true for the string John has a pet dog.
Passed:Your regex petRegex should return false for the string Emma has a pet rock.
Passed:Your regex petRegex should return true for the string Emma has a pet bird.
Passed:Your regex petRegex should return true for the string Liz has a pet cat.
Passed:Your regex petRegex should return false for the string Kara has a pet dolphin.
Passed:Your regex petRegex should return true for the string Alice has a pet fish.
Passed:Your regex petRegex should return false for the string Jimmy has a pet computer.
*/

let petString = "James has a pet cat.";
let petRegex = /cat|dog|fish|bird/; // Change this line
let result5 = petRegex.test(petString);
console.log(result5); //true

// using ignore case
let myString11 = "freeCodeCamp";
let fccRegex = /freeCodeCamp|FreeCodeCamp|FreecodeCamp|FreeCodecamp/i; // Change this line
let result11 = fccRegex.test(myString11);
console.log(result11); // true

// .match() method.

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

console.log("string".match(/regex/)); // null
console.log(/regex/.test("string")); //false

console.log("string regex".match(/regex/)); // regex...
console.log(/string/.test("string")); //true

/*

The result should have the string coding
Passed:Your regex codingRegex should search for the string coding
Passed:You should use the .match() method.

*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result12 = extractStr.match(codingRegex); // Change this line
console.log(result12); //['coding', index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]

// Find More Than the First Match

let testStr13 = "Repeat, Repeat, Repeat";
let ourRegex13 = /Repeat/;
testStr13.match(ourRegex13); //Here match would return ["Repeat"].


let repeatRegex = /Repeat/g;
console.log(testStr13.match(repeatRegex));//(3) ['Repeat', 'Repeat', 'Repeat']


// Your regex starRegex should use the global flag g
// Passed:Your regex starRegex should use the case insensitive flag i
// Passed:Your match should match both occurrences of the word Twinkle
// Passed:Your match result should have two elements in it.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle|twinkle/ig; // Change this line
let result14 = twinkleStar.match(starRegex); // Change this line
console.clear();

console.log(result14); //(2) ['Twinkle', 'twinkle']











































