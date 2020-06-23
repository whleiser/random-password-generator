// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join().replace(/,/g, "");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts and inputs
var passLength = prompt("Select a password length between 8 and 128 characters");
alert("You selected " +passLength+" characters.");

alert("Select at least one of the following character types to be included.")

var confirmUpper = confirm("Would you like to include upper case letters?");
if (confirmUpper === true){
  alert("You are including upper case letters");
}
else alert("You are NOT including upper case letters");

var confirmLower = confirm("Would you like to include lower case letters?");
if (confirmLower === true){
  alert("You are including lower case letters");
}
else alert("You are NOT including lower case letters");

var confirmNum = confirm("Would you like to include numerals?");
if (confirmNum === true){
  alert("You are including numerals");
}
else alert("You are NOT including numerals");

var confirmSpecial = confirm("Would you like to include special characters?");
if (confirmSpecial === true){
  alert("You are including special characters");
}
else alert("You are NOT including special characters");

function generatePassword() {
  var lowercaseLet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  var specialChar = " !#$%&<>[]@?'()*+,-./:;<=\^_`{|}~";
  var numericalChar = "1234567890";
  var newArray = [];
  var passLengthNum = parseInt(passLength);
  var chosenChars = "";
  var genPassword = [];


  if (passLengthNum<8 || passLengthNum>128){return "Error: incorrect length selected";}
  else if (confirmUpper===false&&confirmLower===false&&confirmNum===false&&confirmSpecial===false){
    return "Error: no characters selected";
  }

  else{
  if (confirmUpper === true){
    chosenChars=chosenChars+uppercaseLet;
  }

  if (confirmLower === true){
    chosenChars=chosenChars+lowercaseLet;
  }

  if (confirmNum === true){
    chosenChars=chosenChars+numericalChar;
  }

  if (confirmSpecial === true){
    chosenChars=chosenChars+specialChar;
  }

 newArray = chosenChars.split("");

  for (var i = 0; i < passLengthNum; i++) {
  genPassword.push(newArray[Math.floor(Math.random()*(newArray.length))]);
  }

  return genPassword;
}
}