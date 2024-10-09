function getGrade(name, score) {
  if (typeof score != "number") {
    return "Error: Score should be a number!";
  }

  let grade;
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else if (score >= 0 && score <= 59) {
    grade = "F";
  } else {
    return "Invalid score";
  }
  return `Hello ${name}, your grade is: ${grade}`;
}

const gradeOne = getGrade("Adedunni", 140);
console.log(gradeOne);
const gradeTwo = getGrade("Esther", 75);
console.log(gradeTwo);
const gradeThree = getGrade("Adeleke", 50);
console.log(gradeThree);
const gradeFour = getGrade("Adedewe", 90);
console.log(gradeFour);
const gradeFive = getGrade("David", 80);
console.log(gradeFive);
