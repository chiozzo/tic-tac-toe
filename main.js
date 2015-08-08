/*
Variables for DOM elements
*/

var board = document.getElementById("board");
var squares = board.getElementsByTagName('div');





/*

Add Event Handler for Clicking on Divs

*/

function clicked(e){
console.log("You clicked " + this);
};

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', clicked);
};