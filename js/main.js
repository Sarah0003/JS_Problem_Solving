// Question 1:

/* 
var userNumber = window.prompt("Please enter your number:");
userNumber = Number(userNumber);
console.log(userNumber) 
*/




// Question 2:

/*
var userNumber = window.prompt("Please enter your number:");
userNumber = Number(userNumber);

if( userNumber % 3 ==0 && userNumber % 4 ==0){
  console.log("Yes")
}else{
  console.log("No")
}
*/



// Question 3:
/*
var firstNumber = window.prompt("Please enter your FirstNumber:");
firstNumber = parseInt(firstNumber);

var secondNumber = window.prompt("Please enter your SecondNumber:");
secondNumber = parseInt(secondNumber);

if (firstNumber > secondNumber) {
  console.log("The maximum is firstNumber: " , firstNumber);
} else if (secondNumber > firstNumber) {
  console.log("The maximum is secondNumber: " , secondNumber);
} else {
  console.log("Both numbers are equal: ","firstNumber ==>",firstNumber,"secondNumber ==>",secondNumber);
}
*/


// Question 4:
/*
var userNumber = window.prompt("Please enter your number:");
userNumber = parseInt(userNumber);



if (userNumber < 0) {
  console.log("The number is negative",userNumber);
} else {
  console.log("The number is positive",userNumber);
}
*/



// Question 5:
/*
var firstNumber = window.prompt("Please enter your FirstNumber:");
firstNumber = parseInt(firstNumber);

var secondNumber = window.prompt("Please enter your SecondNumber:");
secondNumber = parseInt(secondNumber);


var thirdNumber = window.prompt("Please enter your thirdNumber:");
thirdNumber = parseInt(thirdNumber);

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log("The maximum is firstNumber: ", firstNumber);
  if (secondNumber > thirdNumber) {
    console.log("The minimum is thirdNumber: ", thirdNumber);
  } else {
    console.log("The minimum is secondNumber: ", secondNumber);
  }
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log("The maximum is secondNumber: ", secondNumber);
  if (firstNumber > thirdNumber) {
    console.log("The minimum is thirdNumber: ", thirdNumber);
  } else {
    console.log("The minimum is firstNumber: ", firstNumber);
  }
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  console.log("The maximum is thirdNumber: ", thirdNumber);
  if (firstNumber > secondNumber) {
    console.log("The minimum is secondNumber: ", secondNumber);
  } else {
    console.log("The minimum is firstNumber: ", firstNumber);
  }
}
else {
  console.log("All numbers are equal: ", "firstNumber ==>", firstNumber, "secondNumber ==>", secondNumber, "thirdNumber ==>",thirdNumber);
}
*/

// Question 6:

// Method 1:
/*
var userNumber = window.prompt("Please enter your number:");
userNumber = parseInt(userNumber);
if (userNumber % 2 == 0 ) {
  console.log("The number is even",userNumber);
} else {
  console.log("The number is odd",userNumber);
}

*/

// Method 2:

/*
var userNumber = window.prompt("Please enter your number:");
userNumber = parseInt(userNumber);
if(userNumber % 2 != 0){
  console.log("The number is odd",userNumber);

} else {
  console.log("The number is even",userNumber);
}
*/

// Method 3:
/*
var userNumber = window.prompt("Please enter your number:");
userNumber = parseInt(userNumber);
if(userNumber % 2){
  console.log("The number is odd",userNumber);

} else {
  console.log("The number is even",userNumber);
}
*/


// Question 7:

// Method 1:
/*
var userInput = window.prompt("Please enter your character:");
userInput=userInput.toLowerCase();
if(userInput  == "a" || userInput  == "i" ||userInput  == "e" || userInput  == "u" || userInput  == "o")
{
  console.log("The character is vowel",userInput);

}else{
  console.log("The character is consonant",userInput);
}*/

// Method 2:

/*
var userInput = window.prompt("Please enter your character:");
if(userInput  == "a"|| userInput  == "A" || userInput  == "i" || userInput  == "I" || userInput  == "e" || userInput  == "E" || userInput  == "u"|| userInput  == "U" || userInput  == "o" || userInput  == "O")
{
  console.log("The character is vowel",userInput);

}else{
  console.log("The character is consonant",userInput);
}
*/


// Question 8:

/*
var userNumber = window.prompt("Please enter  the number:");
userNumber=parseInt(userNumber);
for(i=1;i<=userNumber;i+=1){
  console.log("Input =",userNumber,"," , "Output =",i);

}
*/


// Question 9:
/*
var userNumber = window.prompt("Please enter  the number:");
userNumber=parseInt(userNumber);
for(i=1;i<13;i+=1){
  var res=i*userNumber;
  console.log("Input =",userNumber,"," , "Output =",res);
}
*/

// Question 10:
/*
var userNumber = window.prompt("Please enter the number:");
userNumber = parseInt(userNumber);
for (i = 1; i < userNumber; i += 1) {
  if (i % 2 == 0) {
    console.log("Input =", userNumber, ",", "Output =", i);
  }
}
*/
// Question 11:
/*
var power = 1;
var base = window.prompt("Please enter  the base number:");
base = parseInt(base);

var exp = window.prompt("Please enter  the exp number:");
exp = parseInt(exp);

for (i = 0; i < exp; i++) {
  power = power * base;
  console.log(power)
}
*/

// Question 12:
/*
var subjectOne = window.prompt("Please enter subjectOne grade:");
subjectOne = parseInt(subjectOne);

var subjectTwo = window.prompt("Please enter subjectTwo grade:");
subjectTwo = parseInt(subjectTwo); 

var subjectThree = window.prompt("Please enter subjectThree grade:");
subjectThree = parseInt(subjectThree); 

var subjectFour = window.prompt("Please enter subjectFour grade:");
subjectFour = parseInt(subjectFour); 

var subjectFive = window.prompt("Please enter subjectFive grade:");
subjectFive = parseInt(subjectFive);

var totalMarks= subjectOne + subjectTwo + subjectThree + subjectFour + subjectFive;
var marksAverage= totalMarks/5;
var marksPercentage= (totalMarks/500)*100;
console.log("totalMarks= ",totalMarks,",","marksAverage= ",marksAverage,",","marksPercentage= ",marksPercentage,".");
*/



// Question 13:
/*
var numberOfMonth = window.prompt("Please enter the month number:");
numberOfMonth = parseInt(numberOfMonth);


if (numberOfMonth == 1 || numberOfMonth == 3 || numberOfMonth == 5 || numberOfMonth == 7 || numberOfMonth == 8 || numberOfMonth == 10 || numberOfMonth == 12) 
{
  console.log("31 Days.");
} else if (numberOfMonth == 4 || numberOfMonth == 6 || numberOfMonth == 9 || numberOfMonth == 11) 
{
  console.log("30 Days.");
}
else if (numberOfMonth == 2) 
{
  console.log("28/29 Days.");
}
else {
  console.log("Invalid Month.");
}*/


// Question 14:
/*
var physics = window.prompt("Please enter Physics grade:");
physics = parseInt(physics);

var chemistry = window.prompt("Please enter Chemistry grade:");
chemistry = parseInt(chemistry); 

var biology = window.prompt("Please enter Biology grade:");
biology = parseInt(biology); 

var mathematics = window.prompt("Please enter Mathematics grade:");
mathematics = parseInt(mathematics); 

var computer = window.prompt("Please enter Computer grade:");
computer = parseInt(computer);


var totalMarks= physics + chemistry + biology + mathematics + computer;
var percentage= (totalMarks/500)*100;

if(percentage>=90){
  console.log("The percentage:",percentage,",","The grade is A");
}else if(percentage>=80){
  console.log("The percentage:",percentage,",","The grade is B");
}else if(percentage>=70){
  console.log("The percentage:",percentage,",","The grade is C");
}else if(percentage>=60){
  console.log("The percentage:",percentage,",","The grade is D");
}else if(percentage>=40){
  console.log("The percentage:",percentage,",","The grade is E");
}else{
  console.log("The percentage:",percentage,",","The grade is F");

}
*/

//Switch case

// Question 15:

/*
var numberOfMonth = window.prompt("Please enter the month number:");
numberOfMonth = parseInt(numberOfMonth);

switch (numberOfMonth){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 Days.");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 Days.");
    break;
  case 2:
    console.log("28/29 Days.");
    break;
default:
  console.log("Invalid month!");
    break;
}
*/


// Question 16:
/*
var character = window.prompt("Please enter your character:");

switch (character) {
  case "a":
  case "A":
  case "I":
  case "i":
  case "E":
  case "e":
  case "u":
  case "U":
  case "O":
  case "o":
    console.log("The character is vowel",character);
    break;
default:
  console.log("The character is consonant",character);
    break;
}
*/

// Question 17:


/*
var firstNumber = window.prompt("Please enter the firstNumber:");
firstNumber = Number(firstNumber);

var secondNumber = window.prompt("Please enter the secondNumber:");
secondNumber = Number(secondNumber);

switch (true) {
  case firstNumber > secondNumber:
    console.log("The first number is the maximum", firstNumber);
    break;
  case firstNumber<secondNumber:
    console.log("The second number is the maximum", secondNumber);
    break;
    case firstNumber == secondNumber:
      console.log("The two numbers are equal",firstNumber, secondNumber);
      break;
  default:
    console.log("not a number");
    break;

}
*/

// Question 18:
/*
var number = window.prompt("Please enter the number:");
number = Number(number);

switch ( number % 2 == 0 ) {
  case true:
    console.log("The number is even", number);
    break;
  case false:
    console.log("The number is odd", number);
    break;
  default:
    console.log("not a number");
}
*/


// Question 18:

// Method 1:
/*
var number = window.prompt("Please enter the number:");
number = Number(number);

switch (number>= 0) {
  case true:
    switch (number == 0) {
      case true:
        console.log("Zero number ");
        break;
      default:
        console.log("Positive number ");
        break;
    }
    break;
  case false:
    console.log("Negative number ");
    break;
  default:
    console.log("not a number");
}
*/
// Method 2:
/*
var number = window.prompt("Please enter the number:");
number = Number(number);

switch (true) {
  case number > 0:
    console.log("Positive number ");
    break;
  case number < 0:
    console.log("Negative number ");
    break;
  case number == 0:
    console.log("Zero number ");
    break;
  default:
    console.log("not a number");
}*/


// Question 19:

var operation = window.prompt("Please enter either (+, -, * or / ):");


var firstNumber = window.prompt("Please enter the firstNumber:");
firstNumber = Number(firstNumber);
var secondNumber = window.prompt("Please enter the secondNumber:");
secondNumber = Number(secondNumber);
var result = Number(result);


switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    console.log("result:",result);

    break;
  case "-":
    result = firstNumber + secondNumber;
    console.log("result:",result);

    break;
  case "*":
    result = firstNumber * secondNumber;
    console.log("result:",result);

    break;
  case "/":
    result = firstNumber / secondNumber;
    console.log("result:",result);
    break;
    default:
      console.log("not available operation.");

}
