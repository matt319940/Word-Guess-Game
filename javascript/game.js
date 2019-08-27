
// Array of random "scary" words
var words = ["MURDER", "FREDDY", "JASON", "MICHAEL", "BLOOD", "SILENCE", "DECAPITATION", "STRANGULATION", "ASPHYXIATION", "NIGHTMARE", "SHADOWS", "FRIGHTENED", "SCREAMS", "CURSED", "INTRUDER", "ASSASSIN", "SPOOKY", "TAXES", "MOIST", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH", "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK", "FEAR", "FRIGHT", "DREAD", "HORROR", "TERROR", "DISMEMBERMENT",];

// Number of attempts before death
var attempts = 6;

// Number of wrong & wins
var wins = 0;
var lost = 0;
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

// Checks for duplicates
function isDuplicate(){

	for(var i = 0; i < guessedLetters.length - 1; i++){
		if(guessedLetters[counter] == guessedLetters[i])
			return true;
	}
}

function reset(){
	setTimeout(function(){
		wrong = 0;
		randomNumber = Math.floor(Math.random() * words.length);
		randomWord = words[randomNumber];
		console.log("The random word is: " + randomWord);
		hiddenLetters = [];
		guessedLetters = [];
		counter = 0;
		document.getElementById("hangmanTextUpper").textContent = "";
		document.getElementById("hangmanTextLower").textContent = "Press any key to get started!";
		document.getElementById("wrong").textContent = "";
		initialize();
	}, 52);
}

// Function that checks if you won
function ifWon(){
	
	var playAgain = false;
	if(randomWord == hiddenLetters.join("")){

		// added setTimeout since the confirm pop is process blocking
		setTimeout(function(){ playAgain = confirm("You Won! Play again?"); }, 50);
		setTimeout(function(){ if(playAgain) reset();}, 51);
		wins++;
		document.getElementById("wins").textContent = "Wins: " + wins;
		document.getElementById("losses").textContent = "Losses: " + lost;
	}

}

// Function that checks if you lost
function ifLost(correct){		

	if(correct == 0 && isDuplicate() !== true)
		wrong++;
	
	document.getElementById("wrong").textContent = "Remaining Attempts: " + (attempts - wrong);
		
	if((attempts - wrong) == 0 ){
		alert("You lose! The word was '" + randomWord + "'");
		reset();

		lost++;
		document.getElementById("wins").textContent = "Wins: " + wins;
		document.getElementById("losses").textContent = "Losses: " + lost;
		}
	
}


// Function to run all other functions upon keyPress
function keyPress(){

	guessedLetters[counter] = event.key.toUpperCase();	

	var correct = 0;
	for(var i = 0; i < randomWord.length; i++){
		if(guessedLetters[counter] == randomWord.charAt(i)){
			hiddenLetters[i] = guessedLetters[counter];	
			correct++;
			}
	}


	if(isDuplicate() !== true && (guessedLetters[counter].charCodeAt(0) >= 65 && guessedLetters[counter].charCodeAt(0) <= 90 && guessedLetters[counter].length <= 1)){
		counter++;
		document.getElementById("hangmanTextLower").textContent = "Guessed Letters: " + guessedLetters;

		refresh();
		ifWon();
		ifLost(correct);
	}
}

//Function Calls
initialize();


