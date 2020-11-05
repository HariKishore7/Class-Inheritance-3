// declare class

// export class using module.exports
/* 
Acceptance Criteria

Create a base class called "Shape" with methods drawShape, calculateArea and color property that is initialised with a color.

In another module make a class called "Circle" that extends the "Shape" class and overrides the calculateArea method.

Write code for Shape class in shape.js and Circle in circle.js

Export the class from each file.
*/

//export we use "export default class Shape"
class Shape{
    constructor(color){
        this.color=color;
    }
    drawShape(){
        console.log("Drawing");
    }
    calculateArea(){
        console.log("Unknown areas");
    }
    //comment added
}
module.exports=Shape;
//This is another way "module.exports=Shape";