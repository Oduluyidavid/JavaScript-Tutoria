let age = 17;
if (age >= 18) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}



const grade= 90;
if(grade >= 70 || grade <60){
    console.log("student with the highest grade of A")
}else if (grade >=80 || grade < 89){
    console.log(" student with highest grade of B")
}else {
    console.log("student with highest grade of C")
}

function akunGba( grade , name){
    console.log("university" , name , "student")
    console.log(grade )
}
akunGba( "Charles" ,90)
akunGba( "Esther" , 80)
akunGba( "Adeleke" ,70)
akunGba( "David" ,60)