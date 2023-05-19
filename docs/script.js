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
  if (passwordOptions === null) return null;

  let password = "";
  let n = 0;

  while (n < passwordOptions.length) {
    const oneChar = generateOneChar(passwordOptions);
    if (oneChar !== false) {
      password = password + oneChar;
      n++;
    }
  }

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

  if (!(ifLowercase || ifUppercase || ifNumeric || ifSpecialCharacters)) {
    alert("Please try again; you have to select one option");
    return null;
  }

  const passwordOptions = {
    length: passwordLength,
    lowercase: ifLowercase,
    uppercase: ifUppercase,
    numeric: ifNumeric,
    specialChar: ifSpecialCharacters,
  };

  return passwordOptions;
}

function generateOneChar(passwordOptions) {
  let randomNumber = Math.floor(Math.random() * 95) + 32;

  if (48 <= randomNumber && randomNumber <= 57 && passwordOptions.numeric)
    return String.fromCharCode(randomNumber);
  else if (
    65 <= randomNumber &&
    randomNumber <= 90 &&
    passwordOptions.uppercase
  )
    return String.fromCharCode(randomNumber);
  else if (
    97 <= randomNumber &&
    randomNumber <= 122 &&
    passwordOptions.lowercase
  )
    return String.fromCharCode(randomNumber);
  else if (
    ((32 <= randomNumber && randomNumber <= 47) ||
      (58 <= randomNumber && randomNumber <= 64) ||
      (91 <= randomNumber && randomNumber <= 96) ||
      (123 <= randomNumber && randomNumber <= 126)) &&
    passwordOptions.specialChar
  )
    return String.fromCharCode(randomNumber);

  return false;
}
