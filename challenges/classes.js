// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidClass {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
    return this.length * this.height * this.width;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker extends CuboidClass {
  constructor(attributes) {
    super(attributes);
  }
  cubeSurf() {
    return 6 * (Math.pow(this.length, 2));
  }
  cubeVol() {
    return (Math.pow(this.length, 3));
  }
}
const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});


console.log("** classes stretch start")
console.log(cube.cubeSurf()); 
console.log(cube.cubeVol()); 
console.log("** classes stretch end");

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
