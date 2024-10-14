// Class in javaScript can be defined as a template for javaScript object

// Constructor is used to set up an actual object, A constructor gets called when an object 
// is created using the new keyword, it is also called when an object is created using the new keyword.

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }   
}
const myCar1 = new Car("Camry" , 2008);
const myCar2 = new Car("Audi" , 2007);

console.log("Camry" ,2008, "Audi", 2007)


// class -> Object

// instance properties: what they have
// -name
// -age
//  -height

//  instance method: what they do
//  -talk
//  -run
//  - jump
 
//  instance Properties
class Rectangle{
    // is used to setup
    constructor( _width , _height, _color){
        console.log("the Rectangle is being created!")
        this.width = _width
        this.height = _height
        this.color= _color
    }  
    //  The instance Method
    getArea(){
        return this.width * this.height;
    }
    printDescription(){
        console.log(`I am a Rectangle ${this.width} x ${this.height} and I am ${this.color}`);
    } 
}
let myRectangle1 = new Rectangle( 5, 3, "blue");
let myRectangle2 = new Rectangle( 10, 5, "red");

myRectangle1.printDescription();
