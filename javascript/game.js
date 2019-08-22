// Array of random "scary" words
var words = [
    "MURDER",
    "FREDDY",
    "JASON",
    "MICHAEL",
    "BLOOD",
    "SILENCE",
    "DECAPITATION",
    "STRANGULATION",
    "ASPHYXIATION",
    "NIGHTMARE",
    "SHADOWS",
    "FRIGHTENED",
    "SCREAMS",
    "CURSED",
    "INTRUDER",
    "ASSASSIN",
    "TAXES",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH",
    "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK",
];

// Creates a random number from 1 to the number of items in the words array
var randomNumber = Math.floor(Math.random() * words.length);

// Assigns that random number as an index of the words array and stores that word
var randomWord = words[randomNumber];
console.log(randomWord);

// var upperDisplay = document.getElementById("hangmanTextUpper");
// for(var i = 0; i < words[randomNumber].length; i++)
// {
//     var newP = document.createElement("span");
//     newP.textContent = " _ ";
//     upperDisplay.append(newP);
// }
