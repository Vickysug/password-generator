// Array of special characters to be included in password
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
//This function prompts the user for various password options, including length, whether to include numbers, symbols, uppercase, and lowercase characters.
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


  var useNumbers = confirm("would you like to use numbers in your password?")
  var useSymbols = confirm("would you like to use symbols in your password?")
  var useUppercase = confirm("would you like to use uppercase in your password?")
  var useLowercase = confirm("would you like to use lowercase in your password?")

  // console.log('useNumbers: ', useNumbers, 'useSymbols: ', useSymbols, 'useUppercase: ', useUppercase, 'useLowercase: ', useLowercase) 
  if (useNumbers === false && useSymbols === false && useUppercase === false && useLowercase === false) {
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
var fruit = ['kiwi', 'apple', 'banana']

// Function for getting a random element from an array
//This function takes an array as input and returns a random element from that array.
//It uses Math.random() to generate a random index within the length of the array and then retrieves the element at that index.
function getRandom(arr) {

  var genRandIndex = Math.floor(Math.random() * arr.length);
  //console.log('Index:', genRandIndex)
  var genRand = arr[genRandIndex];
  //console.log('Random:', genRand)
  return genRand;

}




// Function to generate password with user input
/*This function calls getPasswordOptions to get the user's preferences.
It initializes an empty array userCharacters to store the types of characters the user wants in the password.
Based on the user's preferences, the corresponding character arrays are concatenated to userCharacters.
The function then generates a password by randomly selecting characters from userCharacters and adding them to the passwordCharacters array.
The final password is obtained by joining the characters in the passwordCharacters array.
The generated password is returned by the function.*/
function generatePassword() {
  var userOptions = getPasswordOptions()

  var userCharacters = []
  if(userOptions.useNumbers===true) {
    userCharacters=userCharacters.concat(numericCharacters)
  }

  if(userOptions.useSymbols===true){
    userCharacters=userCharacters.concat(specialCharacters)
  }
   if(userOptions.useUppercase===true){
    userCharacters=userCharacters.concat(upperCasedCharacters)
   }
   if(userOptions.useLowercase===true){
    userCharacters=userCharacters.concat(lowerCasedCharacters)
   }


  var passwordCharacters=[]
  for(var i=0;i < userOptions.passwordLength;i++ ){
    var character=getRandom(userCharacters)
    console.log('new character to add: ', character)
    passwordCharacters.push(character)
  }
  console.log('PAssword Characters: ', passwordCharacters)
  var password=passwordCharacters.join("")
  return password
  
}



// Get references to the #generate element
/*The script gets a reference to an HTML element with the id generate and assigns it to the variable generateBtn.
An event listener is added to generateBtn so that when it is clicked, the writePassword function is called.*/
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
/*This function calls generatePassword to get a password and then updates the value of an HTML element with the id password with the generated password.*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);