// Class in javaScript simply denote a template for javaScript object

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }   
}
const myCar1 = new Car("Camry" , 2008);
const myCar2 = new Car("Audi" , 2007);

console.log(myCar1,myCar2)
// Car.map((year,name)=>{
    // console.log(name, year)
// })