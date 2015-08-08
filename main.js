/*
Variables for DOM elements
*/

var board = document.getElementById("board");
var squares = board.getElementsByTagName('div');

var player1 = true;
var player2 = false;



/*

Add Event Handler for Clicking on Divs

*/

function clicked(e){
console.log("You clicked " + this);
if (player1) {
  this.innerText = "O";
  player1 = false;
  player2 = true
} else {
  this.innerText = "X";
  player2 = false;
  player1 = true;
}
};

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', clicked);
};