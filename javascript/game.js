// Array of random "scary" words
var words = ["MURDER", "FREDDY", "JASON", "MICHAEL", "BLOOD", "SILENCE", "DECAPITATION", "STRANGULATION", "ASPHYXIATION", "NIGHTMARE", "SHADOWS", "FRIGHTENED", "SCREAMS", "CURSED", "INTRUDER", "ASSASSIN", "SPOOKY", "TAXES", "MOIST", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH", "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK", "FEAR", "FRIGHT", "DREAD", "HORROR", "TERROR", "DISMEMBERMENT",];

// Number of attempts before death
var attempts = 6;

// Number of wrong & wins
var wins = 0;
var wrong = 0;


// Creates a random number from 1 to the number of items in the words array
var randomNumber = Math.floor(Math.random() * words.length);

// Assigns that random number as an index of the words array and stores that word
var randomWord = words[randomNumber];
console.log("The random word is: " + randomWord);

// Array for hidden letters
var hiddenLetters = [];

// Array and variable for letters guessed
var guessedLetters = [];
var counter = 0;

// Function for initializing upper display area
function initialize(){
	
	// displays " _ " for every letter in hiddenLetters
	for(var i = 0; i < randomWord.length; i++){
		hiddenLetters.push(" _ ");
		document.getElementById("hangmanTextUpper").textContent += hiddenLetters[i];
	}
}

// Function to diplay correctly guessed letters
function refresh(){
	
	// clears upper text are
	document.getElementById("hangmanTextUpper").textContent = "";
	
	// displays the current state of hiddenLetters
	for(var i = 0; i < randomWord.length; i++){

		document.getElementById("hangmanTextUpper").textContent += hiddenLetters[i];

	}
}	

// Function that checks if you won
function ifWon(){
	
	var playAgain = false;
	if(randomWord == hiddenLetters.join("")){
		setTimeout(function(){ playAgain = confirm("You Won! Play again?"); }, 50);
		setTimeout(function(){ if(playAgain) location.reload();}, 51);
	}

}

// Function that checks if you lost
function ifLost(correct){
	
	var dup = isDuplicate();		
	if(correct == 0 && dup !== true)
		wrong++;
	
	document.getElementById("wrong").textContent = "Remaining Attempts: " + (attempts - wrong);
		
	if((attempts - wrong) == 0 ){
		alert("You lose");
		location.reload();
		}
	
}

// Checks for duplicates
function isDuplicate(){
	for(var i = 0; i < guessedLetters.length - 1; i++){
		if(guessedLetters[counter] == guessedLetters[i])
			return true;
	}
}

// Function to run all other functions upon keyPress
function keyPress(){

	guessedLetters[counter] = event.key.toUpperCase();
	document.getElementById("hangmanTextLower").textContent = "Guessed Letters: " + guessedLetters;
	
	var correct = 0;

	
	for(var i = 0; i < randomWord.length; i++){
		if(guessedLetters[counter] == randomWord.charAt(i)){
			hiddenLetters[i] = guessedLetters[counter];	
			correct++;
			}
	}
	
	

	refresh();
	ifWon();
	ifLost(correct);
	
	counter++;
}

//Function Calls
initialize();


