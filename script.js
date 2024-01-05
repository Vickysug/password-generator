function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  // Validate the length
  if (length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return;
  }

  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var specialChars = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !specialChars) {
      alert("Please select at least one character type.");
      return;
  }

  // Generate the password
  var password = generateRandomPassword(length, lowercase, uppercase, numeric, specialChars);

  // Display the password
  alert("Generated Password: " + password);
}

function generateRandomPassword(length, lowercase, uppercase, numeric, specialChars) {
  var charset = "";
  var password = "";

  if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) {
      charset += "0123456789";
  }

  if (specialChars) {
      charset += "$@%&*,";
  }

  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
  }

  return password;
}

document.getElementById('generate').addEventListener('click', function() {
  generatePassword();
});









/* Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
 // Collect all of the user's paassword preferences through prompts
  var passwordLength = parseInt(prompt("Choose between 8 - 128 characters for your password."));

  if (isNaN(passwordLength)) {
    alert("your password length must be a number");
    getPasswordOptions()
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("your password length must be between 8 and 128 characters")
    getPasswordOptions()
  }


  var useNumbers = confirm ("would you like to use numbers in your password?")
  var useSymbols = confirm ("would you like to use symbols in your password?")
  var useUppercase = confirm ("would you like to use uppercase in your password?")
  var useLowercase = confirm ("would you like to use lowercase in your password?")

 // console.log('useNumbers: ', useNumbers, 'useSymbols: ', useSymbols, 'useUppercase: ', useUppercase, 'useLowercase: ', useLowercase) 
  if (useNumbers===false && useSymbols===false && useUppercase===false && useLowercase===false) {
    alert("you have to have at least one character type")
   
  } 

  var userOptions = {
    passwordLength: passwordLength,
    useNumbers: useNumbers,
    useSymbols: useSymbols,
    useUppercase: useUppercase,
    useLowercase: useLowercase
  
  }
  console.log(userOptions)
  
  return userOptions;

   }


//Step  1  Function for getting a random element from an array
function getRandom(arr) {
  //Math.random Math.floor
  

  
return arr[Math.floor(Math.random()*arr.length)];
     
}


function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate password with user input
function generatePassword() {

 var userOptions = getPasswordOptions()



 //Step 2 Based on each confirm value (e.g if they want a group of characters or not) you need to generate a passwordlet password = '';
  

const length = 12;
const randomPassword = generatePassword(length);
console.log(randomPassword);

 



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

*/
  