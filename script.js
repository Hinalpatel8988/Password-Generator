// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
  
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_-+=";

    let includeUpperCaseLetters;
    let includelowerCaseLetters;
    let includeNumbers;
    let includeSymbols;

    let length = parseInt(
      prompt(
        "Please enter desired length (8-12 characters)!"
      )
    );

    if (!length) {
      alert("Number must be entered!");

    
    } else if (length < 8 || length > 128) {
      length = parseInt(
        prompt("You must choose between 8 and 128 characters!")
      );
   
      includeUpperCaseLetters = confirm("Include Upper Case Letters?");
      includelowerCaseLetters = confirm("Include Lower Case Letters?");
      includeNumbers = confirm("Include Number?");
      includeSymbols = confirm("Include Symbols?");
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

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
