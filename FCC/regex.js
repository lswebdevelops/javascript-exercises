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

// Match Ending String Patterns /**$/
let theEnding = "This is a never ending story";
let storyRegex = / story$/;
console.log(storyRegex.test(theEnding)); //true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); //false

let caboose = "The last car on a train is the caboose";
let lastRegex = / caboose$/; // Change this line
let result343434 = lastRegex.test(caboose);

console.log(result343434);

// /*/*/*/*/
// match all letters and numbers with small /\w/
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

let quoteSample123 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result123 = quoteSample123.match(alphabetRegexV2).length;
console.log(result123); //31

//Match Everything But Letters and Numbers with cappital W /\W/
let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
console.log(numbers2.match(shortHand2)); // %
console.log(sentence.match(shortHand2)); // !

let quoteSample1234 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result1234 = quoteSample1234.match(nonAlphabetRegex).length;
console.log(result1234); // 6

/////////////////////////////

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result321 = movieName.match(numRegex).length;
console.log(result321); //4

// Match All Non-Numbers with /\D/

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result4321 = movieName2.match(noNumRegex).length;

console.log(result4321); // 17

//Restrict Possible Usernames

let username = "Oceans11";
let userCheck = /^[a-z][a-z]+\d*$|[a-z]+\d\d$/i; // Change this line
// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; also possible
let result8797 = userCheck.test(username);
console.log(result8797);

// Your regex should match the string JACK /// /\w+|\d+/g;
// Failed:Your regex should not match the string J
// Failed:Your regex should match the string Jo
// Failed:Your regex should match the string Oceans11
// Failed:Your regex should match the string RegexGuru
// Failed:Your regex should not match the string 007
// Failed:Your regex should not match the string 9
// Failed:Your regex should not match the string A1
// Failed:Your regex should not match the string BadUs3rnam3
// Failed:Your regex should match the string Z97
// Failed:Your regex should not match the string c57bT3
// Failed:Your regex should match the string AB1
// Failed:Your regex should not match the string J%4
/*
In regular expressions, the * and $ are special characters that have specific meanings:

(asterisk): This quantifier means "zero or more occurrences of the preceding character." In this context, the preceding character is \d, which represents any digit (0-9). So, \d* would match zero or more digits.
$ (dollar sign): In regular expressions, this represents the end of a line or string. It is used to ensure that the pattern matches the entire string and not just a part of it.

Now, let's break down the regular expression pattern in the code:

javascript
Copy code
/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
^[a-z][a-z]+\d*$: This part of the pattern matches strings that start with a lowercase letter (a-z) followed by one or more lowercase letters and then zero or more digits. The $ ensures that the digits occur at the end of the string.

|: This is the OR operator in regular expressions, allowing either of the two patterns on either side of it to match.

^[a-z]\d\d+$: This part of the pattern matches strings that start with a lowercase letter (a-z) followed by exactly two digits (0-9), and the $ ensures that there are no other characters after the digits.

Let's go through the test cases to understand why they pass or fail:

Pass: "Oceans11" - The string starts with a lowercase letter and is followed by lowercase letters and digits (1+ digits).
Pass: "Jo" - The string starts with a lowercase letter and is followed by lowercase letters (2+ letters).
Pass: "RegexGuru" - The string starts with a lowercase letter and is followed by lowercase letters (2+ letters).
Fail: "JACK" - The string contains uppercase letters, which are not allowed.
Fail: "J" - The string should have at least two lowercase letters or digits.
Fail: "007" - The string contains only digits, and it should have at least one lowercase letter.
Pass: "Z97" - The string starts with a lowercase letter and is followed by two digits.
Fail: "J%4" - The string contains special characters (%), which are not allowed.
So, the regular expression seems to be aiming to match strings that start with a lowercase letter, followed by a combination of lowercase letters and digits. However, it has some issues with certain conditions, as seen in the test results. Depending on the requirements, the regular expression may need adjustments.

*/

// white spaces
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result45645 = sample.match(countWhiteSpace);
console.log(result45645); // (5) [' ', ' ', ' ', ' ', ' ']



let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
console.log(whiteSpace.match(nonSpaceRegex).length); // 32

let whiteSpace2 = "1 2 345 67 890 ";

console.log(whiteSpace2.match(nonSpaceRegex).length); // 10

/*
+  > one or more, 
* > zero or more, 
{,} range
// using ? to test if a character is there or not

*/


let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; // > /a{2,5}h/ > both true;
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false

/*
Your regex should use curly brackets.
Passed:Your regex should not match the string Ohh no
Passed:Your regex should match the string Ohhh no
Passed:Your regex should match the string Ohhhh no
Passed:Your regex should match the string Ohhhhh no
Passed:Your regex should match the string Ohhhhhh no
Passed:Your regex should not match the string Ohhhhhhh no
*/

let ohStr = "Ohhhhhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result2323223 = ohRegex.test(ohStr);
console.log(result2323223); // true

let A04 = "haaaah";
let A02 = "haah";
let A0100 = "h" + "a".repeat(100) + "h";
let multiple0A = /ha{3,}h/;
console.log(multipleA.test(A04)); //true
console.log(multipleA.test(A02)); //false
console.log(multipleA.test(A0100)); //true

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result2323e223 = haRegex.test(haStr);
console.log(result2323e223); // true

let A004 = "haaaah";
let A003 = "haaah";
let A00100 = "h" + "a".repeat(100) + "h";

let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A004)); // false
console.log(multipleHA.test(A003)); // true
console.log(multipleHA.test(A00100)); // false

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let resultO = timRegex.test(timStr);
console.log(resultO); // true

// *////////////////////
// using ? to test if a character is there or not
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american)); //true
console.log(rainbowRegex.test(british)); //true

let favWord = "favorite";
let favRegex = /favou?rite/;
let resultA = favRegex.test(favWord);
console.log(resultA);

// *////////////////////
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

// A more practical use of lookaheads is to check two or more patterns in one string.
//Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

let sampleWord = "ban012"; // at least 6 {6}
let sampleWord2 = "abc123"; // has six word characters and two digits after non-digits
let sampleWord3 = "1a2bc5de"; // not pass //(\w{6}) is not satisfied as there are only five word characters ahead
let sampleWord4 = "astr1on11aut"; //  The positive lookaheads are both satisfied because there are six word characters ahead ("astr1o") and two digits after non-digits ("str1on11"). It matches and returns true.

let pwRegex = /(?=\w{6})(?=\D+\d{2})/; // Change this line

console.log(pwRegex.test(sampleWord)); // true
console.log(pwRegex.test(sampleWord2)); // true
console.log(pwRegex.test(sampleWord3)); // false
console.log(pwRegex.test(sampleWord4)); // true

// /**********
// Check For Mixed Grouping of Characters

let testStr888 = "Pumpkin";
let testRegex888 = /P(engu|umpk)in/;
console.log(testRegex888.test(testStr888)); //true

let myString1 = "nice";
let myString2 = "fine";
let testRegex12 = /(n|f)i(n|c)e/;

console.log(testRegex12.test(myString1));
console.log(testRegex12.test(myString2));

let myStringR = "Franklin D. Roosevelt";
let myRegexR = /(Franklin D. |Eleanor )Roosevelt/; // Change this line
let resultR = myRegexR.test(myStringR);
console.log(resultR);

// Reuse Patterns Using Capture Groups

let repeatStr33 = "row row row your boat";
let repeatRegex33 = /(\w+) \1 \1 /;
console.log(repeatRegex33.test(repeatStr33));; // true
console.log(repeatStr33.match(repeatRegex33));; // ["row row row", "row"]

let repeatNum = "101 101 101"; //true
let repeatNum55 = "101 101 102"; //false

let reRegex =  /^(\d+) \1 \1$/; // Change this line
let resultfg = reRegex.test(repeatNum); 
console.log(resultfg);// true



// Use Capture Groups to Search and Replace




let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));; // The sky is blue.


let codeCampRegex = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

console.log(codeCampRegex); // "Camp Code"

let codeCamp = "114 115"
let codeCampRegex2 = codeCamp.replace(/(\d+)\s(\d+)/, '$2 $1');
console.log(codeCampRegex2);// 115 114

let codeCamp1 = "114 115 116"
let codeCampRegex1 = codeCamp1.replace(/(\d+)\s(\d+)\s(\d+)/, '$3 $2 $1');
console.log(codeCampRegex1);//116 115 114


let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let resultTT = str.replace(fixRegex, replaceText);
console.log(resultTT);



console.clear();
// Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line

let resultFF = hello.replace(wsRegex, ""); // Change this line
console.log(resultFF);
