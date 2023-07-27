let a = 5;
let b = 1;
a++;
// Only change code below this line

let sumAB = a + b;
console.log(sumAB);

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';

let innerHtml2 = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);
console.log(innerHtml);
const allSameQuotes =
  "I've had a perfectly wonderful evening, but this wasn't it.";
const grouchoContraction =
  "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString =
  "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho =
  "I've had a perfectly wonderful evening, but this wasn't it.";

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power); // 8

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;

for (let i = 0; i <= len; i++) {
    console.log(alphabet[i]); // a..z,undefined
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);// b..z
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]); // a..z
}
// /*/*/*/*/*/*/*/*/*/


function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
        row.push(j) // [ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ]
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix); // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
  console.clear();
  

  function loopy() {
    while(true) {
      console.log("Hello, world!");
    }
  }

  function myFunc() {
    for (let i = 1; i<=4; i++) {
      console.log("Still going!");
    }
  }
myFunc() 
