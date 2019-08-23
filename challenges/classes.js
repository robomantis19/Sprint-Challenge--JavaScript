// 1. Copy and paste your prototype in here and refactor into class syntax.



// function CuboidMaker(attributes){
//     this.length = attributes.length
//     this.height = attributes.height
//     this.width = attributes.width
//   }
class CuboidMaker1{
    constructor(att){
        this.length1 = att.length
        this.height1 = this.height
        this.width1 = this.width
    }
    volume(){
        return this.length * this.height * this.width
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

// CuboidMaker.prototype.volume = function(){
//     return this.length * this.height * this.width;
//   }

// CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//   }
  
  
 
  
  const cuboid1 = new CuboidMaker1({
    length: 4, 
    width: 5, 
    height: 5
  })


//-------------------------------------
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('classes below =====================')
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.