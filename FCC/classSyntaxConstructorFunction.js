// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
  }
  
  // Implicit constructor 
  class Rocket {
    launch() {
      console.log("To the moon!");
    }
  }
  
  const zeus = new SpaceShuttle('Jupiter');
  // prints To Jupiter! in console
  zeus.takeOff();
  
  const atlas = new Rocket();
  // prints To the moon! in console
  atlas.launch();


  
// carrots : 
// Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
    
  }
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


