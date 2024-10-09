function eligibilityCheck(name, age) {
  console.log(
    `hello ${name}, You are ${age} ${age >= 2 ? "years" : "year"} old.`
  );
  if (age >= 18) {
    console.log("you are eligible");
  } else {
    console.log("you are not eligible");
  }
}

function eligibilityCheckTernary(name, age) {
  console.log(
    `hello ${name}, you are ${age} ${age >= 2 ? "years" : "year"} old.`
  );
  age >= 18
    ? console.log("you are eligible")
    : console.log(" you are not eligible");
}

function eligibilityCheckSwitch(age) {
  switch (true) {
    case age >= 18:
      console.log("if you are eligible");
      break;
    default:
      console.log("you are not eligible");
  }
}

eligibilityCheckSwitch(12)
eligibilityCheckSwitch(20)
eligibilityCheckSwitch(18)