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
// console.log("randomWord.length = " + randomWord.length);

// Array for hidden letters
var hiddenLetters = [];

// Array and variable for letters guessed
var guessedLetters = [];
var letter;
var counter = 0;

// Function for initializing the game
function initialize(){
	
	for(var i = 0; i < randomWord.length; i++){
		hiddenLetters.push(" _ ");
		var newSpan = document.createElement("span");
		newSpan.setAttribute("class", i);
		newSpan.textContent = hiddenLetters[i];
		document.getElementById("hangmanTextUpper").append(newSpan);
	}
}

// Function to diplay correctly guessed letters
function hiddenRefresh(){
	for(var i = 0; i < randomWord.length; i++){
		if(hiddenLetters[i] !== " _ "){
			document.querySelector("span[class=" + CSS.escape(i) + "]").textContent = hiddenLetters[i];
		}
	}
}	
// Function that checks if you won
function ifWon(){
	var x = 1;
	for(var i = 0; i < randomWord.length; i++){
		if(hiddenLetters[i] == " _ "){
			x = 0;
		}
	}
	var playAgain = false;
	if(x == 1){
		setTimeout(function(){ playAgain = confirm("You Won! Play again?"); }, 50);
		setTimeout(function(){ if(playAgain) location.reload();}, 51);
		// wins++;
		// console.log("wins = " + wins);
	}
}

// Function that checks if you lost
function ifLost(){
	if(wrong == attempts)
	{
		alert("You lost!");
		location.reload();
	}
}

// Function to get keypress
function keyPress(){

	guessedLetters[counter] = event.key.toUpperCase();
	document.getElementById("hangmanTextLower").textContent = guessedLetters;
	counter++;

	
	for(var i = 0; i < guessedLetters.length; i++){
		for(var j = 0; j < randomWord.length; j++){
			if(randomWord.charAt(j) == guessedLetters[i]){
				hiddenLetters[j] = guessedLetters[i];
				}
			}
	}
	console.log("Counter = " + counter);
	// console.log("hiddenLetters array = " + hiddenLetters);
	hiddenRefresh();
	ifWon();
	ifLost();
}

//Function Calls
initialize();


