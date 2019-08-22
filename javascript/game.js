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
	"SPOOKY",
    "TAXES",
	"MOIST",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH",
    "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK",
	"FEAR",
	"FRIGHT",
	"DREAD",
	"HORROR",
	"TERROR",
];

// Creates a random number from 1 to the number of items in the words array
var randomNumber = Math.floor(Math.random() * words.length);

// Assigns that random number as an index of the words array and stores that word
var randomWord = words[randomNumber];
console.log("The random word is: " + randomWord);

// Hidden letters emtpy array
var hiddenLetters = [];

// Array for letters guessed
var guessedLetters = [];

// Function for initializing the game
function initialize(){
	
	for(var i = 0; i < randomWord.length; i++){
		hiddenLetters.push(" _ ");
		var newSpan = document.createElement("span");
		newSpan.textContent = hiddenLetters[i];
		document.getElementById("hangmanTextUpper").append(newSpan);
	}
	console.log(hiddenLetters);
}

function keyPress(){
	var letter = document.getElementById("hangmanTextLower").value;
	console.log(letter);
}

//Function Calls
initialize();

