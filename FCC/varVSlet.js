// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// var numArraj = [];
// var j;
// for (j = 0; j < 3; j++) {
//     numArraj.push(j);
// }
// console.log(numArraj);
// console.log(j);

// var printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());

// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//       let i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }

//   checkScope()

// const s = [5, 6, 7];
// // s = [1, 2, 3];this is invalid
// s[2] = 45;
// console.log(s);// [5,6,45]

// let obj = {
//     name:"FreeCodeCamp",
//     review:"Awesome"
//   };
//   obj.review = "bad";
//   obj.newProp = "Test";
//   Object.freeze(obj); // this freezes the variable not allowing new edits to it
//   obj.newAppendNotAllowed; // { name: 'FreeCodeCamp', review: 'bad', newProp: 'Test

//   console.log(obj);

// //   for example:
//   function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     // Only change code below this line
//   Object.freeze(MATH_CONSTANTS)

//     // Only change code above this line
//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//       console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();

//   var  myConcat = (arr1, arr2) => {
//     return arr1.concat(arr2);
//   };

//   console.log(myConcat([1, 2], [3, 4, 5]));

// parameters for function

// const greeting = (name = "Anonymous", greet = "Hi ") => greet + name + "!";

// console.log(greeting("John", "Hello "));// Hello John
// console.log(greeting()); // Hello Anonymous



const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7

console.log(increment(5)); // returns 6

// Only change code above this line
