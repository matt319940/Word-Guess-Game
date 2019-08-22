document.getElementById("continue").onclick = function(event){
    document.getElementById("text").textContent = "Game On";
    document.getElementById("btn").innerHTML = 
    '<a href="hangman.html" role="button" type="button" class="spooky btn btn-primary btn-lg" style="margin: auto; display: block; background: rgba(0, 0, 0, 0.5); border: none;">Click me if you dare</button>'
   
}
document.getElementById("end").onclick = function(event){
    document.getElementById("text").textContent = "Your life is important - seek help";
    document.getElementById("btn").innerHTML = 
    '<a href="https://suicidepreventionlifeline.org/" role="button" type="button" class="spooky btn btn-primary btn-lg" style="margin: auto; display: block; background: rgba(0, 0, 0, 0.5); border: none;">Click me if you care</button>'
   
}

