let testStr = "freeCodeCamp";

let testRegex = /Code/;
console.log(testRegex.test(testStr)); // true

let testRegex2 = /code/;
console.log(testRegex2.test(testStr)); // false


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
console.log(result);//true;


let testStr3 = "Hello, my name is Kevin.";
let testRegex3 = /Kevin/;
let result3 = testRegex3.test(testStr3);
console.log(result3);//true

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr));// false



let myCompleteName = "Davi";
let myName = /Davi/;
console.log(myName.test(myCompleteName));//true

let myWrongName = /Luciano/;
console.log(myWrongName.test(myCompleteName)); // false



let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result4 = waldoRegex.test(waldoIsHiding);
console.log(result4);//true


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
console.log(result5);//true


// using ignore case
let myString11 = "freeCodeCamp";
let fccRegex = /freeCodeCamp|FreeCodeCamp|FreecodeCamp|FreeCodecamp/i; // Change this line
let result11 = fccRegex.test(myString11);
console.log(result11);// true

console.clear();
// .match() method.



