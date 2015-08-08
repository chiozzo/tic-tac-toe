/*
Variables for DOM elements
*/

var board = document.getElementById("board");
var squares = board.getElementsByTagName('div');

var player1 = true;
var player2 = false;

var reset = document.getElementById("reset");


/*
Clicked event handler add in X & O and switch player
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

/*
Add Event Handler for Clicking on Divs
*/

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', clicked);
};

/*
Add event handler for button to reset board
*/

function resetBoard(e) {
  console.log("reset called");

  for (var i = 0; i < squares.length; i++) {
  squares[i].innerText = " ";
  };

}

reset.addEventListener('click', resetBoard);










