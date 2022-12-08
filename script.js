// Assignment Code
const generateBtn = document.querySelector("#generate");
var numbers = numbers
var symbols = symbols
var upperCaseLetters = upperCaseLetters
var lowerCaseLetters = lowerCaseLetters


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
  const numbers = "0123456789";
  const symbols = "!@#$%&*+";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

let includeUpperCaseLetters;
let includelowerCaseLetters;
let includeNumbers;
let includeSymbols;

let lenght = parseInt(
  prompt(
    "Please enter desired length (8-12 characters)!"
  ));

  if(!lenght) {
    alert ("Number must be entered!")

} else if (lenght < 8 || lenght > 12) {
    lenght = parseInt(
      prompt( "You must choose between 8 and 12 characters!")
      );

} else {
  includeUpperCaseLetters = confirm("would you like lower case characters?");
  includelowerCaseLetters = confirm("would you like upper case characters?");
  includeNumbers = confirm("would you like numbers to include Number?");
  includeSymbols = confirm("would you like numbers to include Symbols?");
}
  }

if (
  !includeUpperCaseLetters &&
  !includelowerCaseLetters &&
  !includeNumbers &&
  !includeSymbols
) {
  alert("You must choose at least one type of characters!");
}

let characters = "";
includeUpperCaseLetters ? (characters += upperCaseLetters) : "";
includelowerCaseLetters ? (characters += lowerCaseLetters) : "";
includeNumbers ? (characters += numbers) : "";
includeSymbols ? (characters += symbols) : "";

var password = "";
for (var i = 0; i < length; i++) {
  password += characters.charAt(
    Math.floor(Math.random() * characters.length)
  );  
}
return password;
}


generateBtn.addEventListener("click", writePassword);
