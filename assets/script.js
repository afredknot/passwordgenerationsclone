// Assignment code here
var generate

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
//variables of string that are pushed through an array to create random password
  var numeral = "1234567890";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase ="abcdefghijklmnopqrstuvwxyz";
  var special ="!@#$%^&*";
  var userChoice= [];
  
  function generatePassword(){
// if password length is greater than 8 or less than 128var 
passwordLength = prompt ("how long of a password would you like")
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter only a number between 8 and 128");
      return
    }
    
// confirm messages to see ask for user input
lowercaseYes = confirm ("do you want lowercase letters?");
upperCase = confirm ("Do you want to add Uppercase letters?");
numbers = confirm ("Do you want to add numbers?");
specials = confirm ("do you want to add any special characters?")
 
 var throughPut = "";// variable where the array can unload and turn the characters into a string
//if statements that select if yes or no and tell each variable if they have been chosen or not.
 if (lowercaseYes) {
userChoice += lowercase
 } 
 if(upperCase) {
  userChoice += uppercase
 }
 if (numbers){
  userChoice += numeral
 }
 if (specials) {
  userChoice += special
 }
 
//formula to generate the password
 for(let i = 0; i <= passwordLength; i++){
  throughPut += userChoice.charAt((Math.random() * userChoice.length))
console.log(throughPut)
};
 return throughPut; //submit results and print into the box
}