// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  if (password === null) return;
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment code here
function generatePassword() {
  const passwordOptions = createPasswordOptions();
  console.log(passwordOptions);
  if (passwordOptions === null) return null;

  let password = "";

  for (let i = 0; i < passwordOptions.length; i++) {
    password = password + generateOneChar();
  }
  console.log(password);
  return password;
}

function createPasswordOptions() {
  const passwordLength = prompt(
    "How long would you like the length of your password to be? (Must be 10 to 128 chars in length)"
  );

  if (passwordLength < 10 || passwordLength > 128) {
    alert("Please try again; password length must be 10-128 chars in length");
    return null;
  }

  const ifLowercase = confirm("Include lowercase?");
  const ifUppercase = confirm("Include uppercase?");
  const ifNumeric = confirm("Include numbers?");
  const ifSpecialCharacters = confirm("Include special characters?");

  const passwordOptions = {
    length: passwordLength,
    lowercase: ifLowercase,
    uppercase: ifUppercase,
    numeric: ifNumeric,
    specialChar: ifSpecialCharacters,
  };

  return passwordOptions;
}

function generateOneChar() {
  return Math.floor(Math.random() * 10);
}
