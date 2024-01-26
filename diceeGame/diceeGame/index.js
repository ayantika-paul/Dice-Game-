var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" +randomNumber1+ ".png";

var randomImageSource1 = "images/" + randomImage1;

document.querySelector(".img1").setAttribute("src", randomImageSource1);


//for player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" +randomNumber2+ ".png";

var randomImageSource2 = "images/" + randomImage2;

document.querySelector(".img2").setAttribute("src", randomImageSource2);

//heading change
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}