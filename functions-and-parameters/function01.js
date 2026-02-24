function sayMyName() {
      console.log("H");
      console.log("I");
      console.log("T");
      console.log("E");
      console.log("S");
      console.log("H");
  }

sayMyName // reference , nothing is displayed in output
sayMyName(0,5)  // valid

function addTwoNumbers(number1 , number2)
{
    console.log("number1 : " + number1);
    console.log("number2 : " + number2);
    console.log(number1 + number2);
     
}

addTwoNumbers() // NaN
