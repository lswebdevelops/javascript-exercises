// const getMousePosition = (x, y) => ({
//     x: x,
//     y: y
//   });

const getMousePosition = (x, y) => ({ x, y });

console.log(getMousePosition(5, 56));

/* before: 
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // Only change code above this line
  };
  after: 
  */

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {name, age, gender,
  };
  // Only change code above this line
};
console.log(createPerson("Luciano", 37, "M"));

