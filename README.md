# Password Generator
This is a JavaScript program that generates a password based on user-selected criteria. The program prompts the user for the desired length of the password and which character types to include in the password. It then generates a random password that meets the selected criteria.

## Usage
To use the password generator, simply open the index.html file in a web browser. The file contains a button that says "Generate Password". Clicking the button will prompt the user to select the password criteria. Once the user has selected the desired criteria, the program will generate a password that meets those criteria and display it in the text field next to the button.

## Criteria
The user is prompted to select the following password criteria:

Password length: The user must choose a length between 8 and 128 characters.
Character types: The user must select at least one of the following character types: lowercase letters, uppercase letters, numeric characters, and/or special characters.

## Code
The program is written in vanilla JavaScript and consists of a single function called generatePassword. This function prompts the user for the desired password criteria, validates the input, and generates a random password based on the selected criteria.

The function first prompts the user for the desired length of the password and validates the input to ensure that it is a number between 8 and 128.

The function then prompts the user for which character types to include in the password and validates that at least one character type was selected. It defines the character sets for each character type and concatenates the selected character sets into a single string.

The function then generates the password using the selected character set and length. It enters a loop that runs passwordLength times and in each iteration, generates a random integer between 0 and the length of the character set string. It then selects the character at the corresponding index in the character set string and appends it to the password string.

Finally, the function returns the generated password.

## Conclusion
This password generator is a simple but effective way to generate secure passwords that meet specific criteria. Its code is easy to understand and can be modified to meet different requirements or integrated into other web applications.




