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
console.log(testStr13.match(repeatRegex)); //(3) ['Repeat', 'Repeat', 'Repeat']

// Your regex starRegex should use the global flag g
// Passed:Your regex starRegex should use the case insensitive flag i
// Passed:Your match should match both occurrences of the word Twinkle
// Passed:Your match result should have two elements in it.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle|twinkle/gi; // Change this line
let result14 = twinkleStar.match(starRegex); // Change this line

console.log(result14); //(2) ['Twinkle', 'twinkle']

// /*/*/*/*/*/*/*/*/*/
let humStr = "I'll hum a song";
let hug_Str = "Bear hug";
let huRegex = /hu./; // > . brings hu{anything here }
console.log(huRegex.test(humStr)); //true
console.log(huRegex.test(hug_Str)); //true

// You should use the .test() method.
// Waiting:You should use the wildcard character in your regex unRegex
// Waiting:Your regex unRegex should match run in the string Let us go on a run.
// Waiting:Your regex unRegex should match sun in the string The sun is out today.
// Waiting:Your regex unRegex should match fun in the string Coding is a lot of fun.
// Waiting:Your regex unRegex should match pun in the string Seven days without a pun makes one weak.
// Waiting:Your regex unRegex should match nun in the string One takes a vow to be a nun.
// Waiting:Your regex unRegex should match bun in the string She got fired from the hot dog stand for putting her hair in a bun.
// Waiting:Your regex unRegex should not match the string There is a bug in my code.
// Waiting:Your regex unRegex should not match the string Catch me if you can.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un./; // Change this line
let result_15 = unRegex.test(exampleStr);
console.log(result_15);

// /*/*/*/*/*/*/*/*/ */*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let begStr = "beg";
let bogStr = "bog";
let bgRegex = /b[aiue]g/;
console.log(bigStr.match(bgRegex)); // ['big', index: 0, input: 'big', groups: undefined]
console.log(bagStr.match(bgRegex)); // regex.js:135 ['bag', index: 0, input: 'bag', groups: undefined]
console.log(bugStr.match(bgRegex)); // regex.js:136 ['bug', index: 0, input: 'bug', groups: undefined]
console.log(bogStr.match(bgRegex)); // null
console.log(begStr.match(bgRegex)); // ['beg', index: 0, input: 'beg', groups: undefined]

/*
You should find all 25 vowels.
Waiting:Your regex vowelRegex should use a character class.
Waiting:Your regex vowelRegex should use the global flag.
Waiting:Your regex vowelRegex should use the case insensitive flag.
Waiting:Your regex should not match any consonants.
*/

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result_16 = quoteSample.match(vowelRegex); // Change this line
console.log(result_16);

// /*/*/*/*/*/*/*/*/ */*/

let catStr = "cat";
let batStr = "bat";
let eatStr = "eat";
let fatStr = "fat";
let matStr = "mat";
let natStr = "nat";
let bgRegex11 = /[a-m]at/; // from a to m, so n to z are not included.

console.log(catStr.match(bgRegex11)); // cat
console.log(batStr.match(bgRegex11)); //bat
console.log(matStr.match(bgRegex11)); // mat
console.log(natStr.match(bgRegex11)); // null

/*
Your regex alphabetRegex should match 35 items.
Waiting:Your regex alphabetRegex should use the global flag.
Waiting:Your regex alphabetRegex should use the case insensitive flag.
*/

let quoteSample33 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result33 = quoteSample33.match(alphabetRegex); // Change this line

console.log(result33);

// /*/*/*/*/*/*/*/*/ */*/

// Match Numbers and Letters of the Alphabet

let jennyStr = "Jenny8675309";
let myRegex44 = /[a-z0-9]/gi;
console.log(jennyStr.match(myRegex44)); // (12) ['J', 'e', 'n', 'n', 'y', '8', '6', '7', '5', '3', '0', '9']

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
// Your regex myRegex should match 17 items.
// Passed:Your regex myRegex should use the global flag.
// Passed:Your regex myRegex should use the case insensitive flag.
console.clear();

let quoteSample444 = "Blueberry 3.141592653s are delicious.";
let myRegex444 = /[h-s2-6]/gi; // Change this line
let result444 = quoteSample444.match(myRegex444); // Change this line
console.log(result444); //(17) ['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's']
// /*/*/*/*/*/*/*/*/ */*/
//called negated character sets. [^*]
let quoteSample555 = "3 blind mice.";
let myRegex555 = /[^aeiou0-9]/gi; // Change this line
let result555 = quoteSample555.match(myRegex555); // Change this line

console.log(result555); // [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.']

// /*/*/*/*/*/*/*/*/ */*/

// matching double digits/letters with +

let difficultSpelling = "Mississippi";
let myRegex66 = /s+/g; // Change this line
let result66 = difficultSpelling.match(myRegex66);
console.log(result66); // (2) ['ss', 'ss']

// /*/*/*/*/*/*/*/*/ */*/

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result1 = chewieQuote.match(chewieRegex);
console.log(result1); // ['Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!', groups: undefined]

// /*/*/*/*/*/*/*/*/ */*/

let titanic = "titanic";
let regexT = /t[a-z]*i/;
console.log(titanic.match(regexT)); // titani

// ? character to change it to lazy matching.
let text = "<h1>Winter is coming</h1>";
let myRegex777 = /<[a-z0-9]*?>/; // Change this line
let result777 = text.match(myRegex777);
console.log(result777);


// /*/*/*/*/
// Match Beginning String Patterns
// */*/*/*/ */*/

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); //true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // false

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result_1 = calRegex.test(rickyAndCal);
console.log(result_1); //true

console.clear();
// /*/*/*/*/



