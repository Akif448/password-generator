// Define variables
var generateBtn = document.querySelector("#generate")
var result = document.querySelector("#password")

// defining the variables to choose from
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "1234567890".split("");
var specChar = "!@#$%^&*()".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Password length set by the user, range set between 8 and 128 characters
function generatePassword() {
  var passwordLength = prompt("Password length?");
  var hasUpperCase = confirm("Please Confirm, Uppercase characters?");
  var hasNumber = confirm("Please Confirm, Numbers?");
  var hasSpecialCharacter = confirm("Please confirm, Speacial characters?");

  var generatedPassword = ""
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 129) {
    var charArray = lowerCase;

    if (hasUpperCase) {
      charArray = charArray.concat(upperCase)
    }

    if (hasNumber) {
      charArray = charArray.concat(num)
    }

    if (hasSpecialCharacter) {
      charArray = charArray.concat(specChar)
    }
    for (var i = 0; i < passwordLength; i++) {
      generatedPassword += charArray[Math.floor(Math.random() * charArray.length)]
    }
  }

  return generatedPassword
}

generateBtn.addEventListener("click", writePassword);