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
    "DISMEMBERMENT",
];
// Number of attempts before death
var attempts = 6;

// Creates a random number from 1 to the number of items in the words array
var randomNumber = Math.floor(Math.random() * words.length);

// Assigns that random number as an index of the words array and stores that word
var randomWord = words[randomNumber];
console.log("The random word is: " + randomWord);

// Array for hidden letters
var hiddenLetters = [];

// Array for letters guessed
var guessedLetters = [];

// Function for initializing the game
function initialize(){
	
	for(var i = 0; i < randomWord.length; i++){
        if(hiddenLetters[i] >= "A" && hiddenLetters[i] <= "Z"){
            continue;
        }
		hiddenLetters.push(" _ ");
		var newSpan = document.createElement("span");
		newSpan.textContent = hiddenLetters[i];
		document.getElementById("hangmanTextUpper").append(newSpan);
	}
	console.log(hiddenLetters);
}

// Function to get keypress
function keyPress(){
    for(var i = 0; i < attempts; i++)
    {
    var letter = document.getElementById("hangmanTextLower").value.toUpperCase();
    // if(onkeydown == 13){
    //     document.getElementById("hangmanTextLower").textContent("");
    }
    guessedLetters[i] = letter;
    
        for(var j = 0; j < randomWord.length; j++){
            if(randomWord.charAt(j) == letter){
                hiddenLetters[j] = letter;
            }

        }
    }
    console.log(letter);
    console.log(hiddenLetters);
}

//Function Calls
// document.getElementById("hangmanTextLower").addEventListener("keydown", initialize());
initialize();

