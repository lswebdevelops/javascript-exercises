// const getMousePosition = (x, y) => ({
//     x: x,
//     y: y
//   });

// const getMousePosition = (x, y) => ({ x, y });

// console.log(getMousePosition(5, 56));

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

// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//   return { name, age, gender };
//   // Only change code above this line
// };
// console.log(createPerson("Luciano", 37, "M"));

const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};
console.log(person.sayHello());

const person2 = {
  name: "Luciano",
  sayHello() {
    return `Hello! My name is ${this.name}`;
  },
};

console.log(person2.sayHello());

// before
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function (newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(`gear: ${bicycle.gear}`);

//after:

// Only change code below this line
const bicycle2 = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle2.setGear(3);
console.log(`gear: ${bicycle2.gear}`);
