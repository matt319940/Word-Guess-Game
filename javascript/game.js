var words = [
    "MURDER",
    "FREDDY KRUEGER",
    "JASON",
    "MICHAEL MEYERS",
    "BLOOD",
];
var random = Math.floor(Math.random() * 5);

var upperDisplay = document.getElementById("hangmanTextUpper");
for(var i = 0; i < words[random].length; i++)
{
    var newP = document.createElement("span");
    newP.textContent = " _ ";
    upperDisplay.append(newP);
}
