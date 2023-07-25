// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
//   };
  
//   const greeting = `Hello, my name is ${person.name}! 
//   I am ${person.age} years old.`;
  
//   console.log(greeting);



const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.map(item =>
        `<li class="text-warning">${item}</li>
        <li class="text-warning">${item}</li>
        <li class="text-warning">${item}</li>`
    )
    // Only change code above this line
  
    return {failureItems};
  }
  
  const failuresList = makeList(result.failure);
  const failuresList2 = makeList(result.success);
  const failuresList3 = makeList(result.skipped);

console.log(failuresList, failuresList2, failuresList3);

// 0
// : 
// "<li class=\"text-warning\">no-var</li>"
// 1
// : 
// "<li class=\"text-warning\">var-on-top</li>"
// 2
// : 
// "<li class=\"text-warning\">linebreak</li>"
