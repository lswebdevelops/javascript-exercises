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


let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  obj.review = "bad";
  obj.newProp = "Test";
  Object.freeze(obj); // this freezes the variable not allowing new edits to it
  obj.newAppendNotAllowed; // { name: 'FreeCodeCamp', review: 'bad', newProp: 'Test

  console.log(obj);

