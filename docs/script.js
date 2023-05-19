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
  let n = 0;
  let oneChar = "";

  while (n < passwordOptions.length) {
    console.log("n= " + n);
    oneChar = generateOneChar(passwordOptions);
    console.log("oneChar =" + oneChar);
    if (oneChar !== false) {
      password = password + oneChar;
      n++;
    }
    console.log("password = " + password);
  }

  // for (let i = 1; i < passwordOptions.length + 1; i++) {
  //   const oneChar = generateOneChar(passwordOptions);
  //   if (oneChar === false) {
  //     i--;
  //   } else {
  //     password = password + oneChar;
  //   }
  // }
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

function generateOneChar(passwordOptions) {
  let randomNumber = 0;
  let ifValid = false;
  randomNumber = Math.floor(Math.random() * 95) + 32;
  console.log("randomNumber = " + randomNumber);

  if (48 <= randomNumber && randomNumber <= 57 && passwordOptions.numeric) {
    ifValid = true;
    // console.log(ifValid);
  } else if (
    65 <= randomNumber &&
    randomNumber <= 90 &&
    passwordOptions.uppercase
  ) {
    ifValid = true;
    // console.log(ifValid);
  } else if (
    97 <= randomNumber &&
    randomNumber <= 122 &&
    passwordOptions.lowercase
  ) {
    ifValid = true;
    console.log(ifValid);
  } else if (
    ((32 <= randomNumber && randomNumber <= 47) ||
      (58 <= randomNumber && randomNumber <= 64) ||
      (91 <= randomNumber && randomNumber <= 96) ||
      (123 <= randomNumber && randomNumber <= 126)) &&
    passwordOptions.specialChar
  ) {
    ifValid = true;
    // console.log(ifValid);
  }

  console.log(ifValid);
  if (ifValid) return String.fromCharCode(randomNumber);
  else return false;
}
