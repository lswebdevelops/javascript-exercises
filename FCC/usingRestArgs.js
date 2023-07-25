const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(`total: ${sum(0, 1, 2)}`);



function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

function howManyArguments(...argument) {
  return `number of arguments: ${argument.length}`;
}

console.log(howManyArguments("as", null, false, 2));


const arr = [5, 89, 3, 45 ];

const maximus = Math.max(...arr);
console.log(maximus);

