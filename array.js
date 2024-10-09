const names = [
  {
    numberOfRoom: "35",
    toilet: "6",
    sizeOfPop: "75",
    kitchen: "2",
  },
  {
    numberOfRoom: "5",
    toilet: "6",
    sizeOfPop: "10",
    kitchen: "3",
  },
  {
    numberOfRoom: "5",
    toilet: "6",
    sizeOfPop: "10",
    kitchen: "3",
  },
]


// variable i start with zero
// Compare array length to var i
// if true increment the var i with 1 and run the for loop block
// if the comparism return false then stop the loop
for (let i = 0; names.length > i; i++) {
  console.log(names[i]);
}


const fruits = ["Apple", "Orange", "Mango", "Pawpaw"];
  for (let j =0;  fruits.length < j; j++){
    console.log(fruits[j]);
  }