// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book("anonymous");
// console.log(novel.writer);
// novel.writer = "newAuthor";
// console.log(novel.writer);

// Only change code below this line
class Thermostat {
  constructor(tempFahreinheit) {
    this._tempFahreinheit = tempFahreinheit;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this._tempFahrreinheit - 32);
  }
  //setter
  set temperature(Celsius) {
    return (this._tempFahreinheit = (Celsius * 9.0) / 5 + 32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius

console.log(`Temperatur: ${temp} C`);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(`Temperatur: ${temp} C`);
