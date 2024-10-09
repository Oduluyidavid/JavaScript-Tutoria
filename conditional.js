// conditional statement

const isMon = false;
const isMakingMeal = false;

if (isMon || !isMakingMeal) {
  console.log("Aremo is coming because he is making the meal");
} else if (!isMon || !isMakingMeal) {
  console.log("Aremo is not coming because he is not making the meal");
} else if (!isMon || !isMakingMeal) {
  console.log("Aremo is not coming today because it is not monday");
} else {
  console.log("Aremo is not coming");
}


const isFri= true
const techExpo=false
if (isFri && !techExpo) { 
  console.log("Debby told me she is coming to the techExpo event")
}else if (!isFri && !techExpo) {
  console.log("Debby is not coming because she can't attend the techExpo event")
}else if(!isFri && !techExpo){
  console.log("Debby is not today because it is not friday")
}else {
  console.log("Debby is not coming")
}


let age=20;
if (age > 18){
    console.log("it is only eligible for adult");
}else if (age < 17){
    console.log("age less than 18 are not allowed to access this program");
}else{
    console.log("you are a teenager");
}
//  using comparison to test conditional statement

console.log(20<=17);
console.log(17>=20);
console.log("20" == 17);
console.log("17" === 20);
console.log(20 == 20);
console.log(20 > 17);

var Egbontemmy=32;
  if(Egbontemmy >32){
    console.log("he is eligible for the program")
  }else if(Egbontemmy <32){
    console.log("he is not an adult yet")
  }else{
    console.log("Egbontemmy is just more than a tennager")
  }
