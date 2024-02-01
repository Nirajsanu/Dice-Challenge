if (window.performance.navigation.type === 1){
    rollDice();
}

function rollDice(){
    var dice1 =Math.round((Math.random()*5)+1);
if (dice1 === 1){
    document.querySelector(".img1").setAttribute("src" , "./images/dice1.png");
}else if (dice1 === 2){
    document.querySelector(".img1").setAttribute("src" , "./images/dice2.png");
}else if (dice1 === 3){
    document.querySelector(".img1").setAttribute("src" , "./images/dice3.png");
}else if (dice1 === 4){
    document.querySelector(".img1").setAttribute("src" , "./images/dice4.png");
}else if (dice1 === 5){
    document.querySelector(".img1").setAttribute("src" , "./images/dice5.png");
}else if (dice1 === 6){
    document.querySelector(".img1").setAttribute("src" , "./images/dice6.png");
}

var dice2 =Math.round((Math.random()*5)+1);
if (dice2 === 1){
    document.querySelector(".img2").setAttribute("src" , "./images/dice1.png");
}else if (dice2 === 2){
    document.querySelector(".img2").setAttribute("src" , "./images/dice2.png");
}else if(dice2 === 3){
    document.querySelector(".img2").setAttribute("src" , "./images/dice3.png");
}else if(dice2 === 4){
    document.querySelector(".img2").setAttribute("src" , "./images/dice4.png");
}else if (dice2 === 5){
    document.querySelector(".img2").setAttribute("src" , "./images/dice5.png");
}else if (dice2 === 6){
    document.querySelector(".img2").setAttribute("src" , "./images/dice6.png");
}

if (dice1 === dice2){
    document.querySelector("h1").innerText = "DRAW!!"
}else if (dice1 > dice2){
    document.querySelector("h1").innerText = "🚩Player 1, Wins the Match."
}else if (dice1 < dice2){
    document.querySelector("h1").innerText = "Player 2, Wins the Match🚩."
}
}