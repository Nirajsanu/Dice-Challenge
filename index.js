document.querySelector(".btn").addEventListener("click" , rollDice)

function rollDice(){

    //number generator for first Dice
    var roll1 =Math.round((Math.random()*5)+1);
document.querySelector(".img1").setAttribute("src" , "./images/dice" + roll1 + ".png");

 //number generator for second Dice  
var roll2 =Math.round((Math.random()*5)+1);
document.querySelector(".img2").setAttribute("src" , "./images/dice" + roll2 + ".png");

//For changing the header according to result
if (roll1 === roll2){
    document.querySelector("h1").innerText = "DRAW!!, Let's do it again"
}else if (roll1 > roll2){
    document.querySelector("h1").innerText = "🚩Player 1, Wins the Match."
}else if (roll1 < roll2){
    document.querySelector("h1").innerText = "Player 2, Wins the Match🚩."
}
}
