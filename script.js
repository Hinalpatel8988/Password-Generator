const generateButton = document.getElementById('generate-button');
const passwordOutput = document.getElementById('password');

function generatePassword() {
  const length = prompt('Enter the desired password length (between 8 to 120)!:');
const options = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  special: false
};

options.uppercase = confirm('Include uppercase Letters?');
options.lowercase = confirm('Include lowercase Letters?');
options.numbers = confirm('Include numbers?');
options.special = confirm('Include special characters?');

if (!options.uppercase && !options.lowercase && !options.numbers && !options.special) {
  alert('You must select at least one character type!');
  return;
}



let characters = '';
if (options.uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (options.lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
if (options.numbers) characters =+ "0123456789";
if (options.special) characters =+ "*&^%$#@!";

let password = '';

for (let i = 0; i <length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
}

  return password;

}

function writepassword() {
  const password = generatePassword();
  const passwordText = document.getElementById("password");

  passwordText.value = password;
  
}

generateButton.addEventListener("click", writepassword);

