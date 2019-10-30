var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNum1 + ".png";

var randomImageSoruce = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSoruce);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerText = "🥇 Player 1 Wins!"
}
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerText = "🥇 Player 2 Wins!"
}
else{
    document.querySelector("h1").innerText = "Draw!"
}