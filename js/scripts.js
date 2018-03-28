// Business Logic: Variables
var consonantsArray = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
var vowels = ["a","e","i","o","u"];
var inputString = "";



// Business Logic: Functions
function singleLetter() {
  vowels.forEach(function(vowel) {
    console.log("LOOK HERE I AM");
    if (vowel === inputString) {
      inputString = inputString + "ay";
      console.log(inputString);
    }
  });
}

function multiVowel() {
  vowels.forEach(function(vowel) {
    if (vowel === inputString.charAt(0)) {
      inputString = inputString + "way";
      console.log(inputString);
    }
  });
}


// User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    inputString = $("#inputString").val();
    var stringLength = inputString.length;
    debugger;
    if (stringLength < 2) {
      singleLetter();
    } else {
      multiVowel();
    }
  });


});
