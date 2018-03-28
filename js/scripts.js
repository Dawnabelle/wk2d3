// Business Logic: Variables
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",">","<","|","'","}","{","'",";",":","`"]
var vowels = ["a","e","i","o","u"];
var inputString = "";
var inputArray = [];
var passString = "";
var translateArray = [];
var asshole = 0;


// Business Logic: Functions
function singleLetter() {
  vowels.forEach(function(vowel) {
    if (vowel === passString) {
      passString = passString + "ay";
    }
  });
}

function multiVowel() {
  vowels.forEach(function(vowel) {
    if (vowel === passString.charAt(0)) {
      passString = passString + "way";
    }
  });
}

function stringNormalizer() {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/[#*?!@%$-_1234567890]/g,"");
}

function consecutiveConsonants() {
  var sliceLetter = "";
  var sliceCounter = 0;
  var sliceString = "";
  for (var i = 0; i < passString.length && sliceCounter === 0; i++) {
    vowels.forEach(function(vowel){
      // debugger
      if (passString.charAt(i) === "q" && passString.charAt(i+1) === "u") {
        sliceLetter = passString.slice(0,i+2);
        sliceString = passString.slice(i+2);
        sliceCounter ++;
      } else if (passString.charAt(i) === vowel) {
        sliceLetter = passString.slice(0,i);
        sliceString = passString.slice(i);
        sliceCounter ++;
      }
    });
  }
  passString = sliceString + sliceLetter + "ay";
}


// User Interface Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    translateArray = [];
    event.preventDefault();
    inputString = $("#inputString").val();
    for (var i = 0; i < inputString.length; i++) {
      if (inputString[i] === specialCharacter[i]) {
        alert("STAHP. No special characters");
        asshole ++;
      }
    }
    if (asshole === 0) {
      stringNormalizer();
      inputArray = inputString.split(" ");
      for (var j = 0; j < inputArray.length; j++) {
        passString = inputArray[j];
        var stringLength = passString.length;
        // debugger;
        if (stringLength < 2) {
          singleLetter();
        } else if (passString.charAt(0) === "a" || passString.charAt(0) === "e" ||passString.charAt(0) === "i" || passString.charAt(0) === "o" || passString.charAt(0) === "u") {
          multiVowel();
        } else {
          consecutiveConsonants();
        }
        console.log(passString);
        translateArray.push(passString);
      }
      inputString = translateArray.join(" ");
      $('#outputSpan').text(" " + inputString);
    }
  });
});
