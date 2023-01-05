function generatepassword() {
const option = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  special: false};

options.uppercase = confirm('Include Uppercase Letters?');
options.lowercase = confirm('Include Uppercase Letters?');
options.numbers = confirm('Include numbers?');
options.special = confirm('Include special characters?');

let characters = '';
if (options.uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (options.lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
if (options.numbers) characters =+ "0123456789";
if (option.special) characters =+ "*&^%$#@!";

let password = '';


}
