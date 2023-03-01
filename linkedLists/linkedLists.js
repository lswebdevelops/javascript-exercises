
let linkedList2 = {
  value: ['John', 46],
  next: {
    value: ['Karl', 34],
    next: {
      value: ['Susan', 20],
      next: null
    }
  }
};

console.log(linkedList2)


// now running using nodejs: 


// const util = require('util');
// let linkedList2 = {
//   value: ['John', 46],
//   next: {
//     value: ['Karl', 34],
//     next: {
//       value: ['Susan', 20],
//       next: null
//     }
//   }
// };
// console.log(util.inspect(linkedList2, { showHidden: false, depth: null }));
// result: 

// $ node linkedLists.js 
// {
//   value: [ 'John', 46 ],
//   next: {
//     value: [ 'Karl', 34 ],
//     next: { value: [ 'Susan', 20 ], next: null }
//   }
// }