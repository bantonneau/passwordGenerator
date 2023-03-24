// Assignment code here
// Define a function that prompts the user for password criteria and generates a password
function generatePassword() {
  // Prompt the user for the desired length of the password
  let passwordLength = parseInt(prompt('Enter the length of the password (between 8 and 128 characters):'));

  // Validate the password length input
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Invalid input. Enter a number between 8 and 128:'));
  }

  // Prompt the user for which character types to include in the password
  let includeLowercase = confirm('Include lowercase letters?');
  let includeUppercase = confirm('Include uppercase letters?');
  let includeNumeric = confirm('Include numbers?');
  let includeSpecial = confirm('Include special characters?');

  // Validate that at least one character type was selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert('You must include at least one character type!');
    includeLowercase = confirm('Include lowercase letters?');
    includeUppercase = confirm('Include uppercase letters?');
    includeNumeric = confirm('Include numbers?');
    includeSpecial = confirm('Include special characters?');
  }

  // Define the character sets for each character type
  const lowercaseSet = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericSet = '0123456789';
  const specialSet = '~!@#$%^&*()_+-={}[]|:;"<>,.?/';

  // Concatenate the selected character sets into a single string
  let characterSet = '';
  if (includeLowercase) characterSet += lowercaseSet;
  if (includeUppercase) characterSet += uppercaseSet;
  if (includeNumeric) characterSet += numericSet;
  if (includeSpecial) characterSet += specialSet;

  // Generate the password using the selected character set and length
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  // Return the generated password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




