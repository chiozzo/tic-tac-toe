/*
Variables for DOM elements
*/

var board = document.getElementById("board");
var squares = board.getElementsByTagName('div');

var player1 = true;
var player2 = false;

var reset = document.getElementById("reset");

var div1 = document.getElementById('1');
var div2 = document.getElementById('2');
var div3 = document.getElementById('3');
var div4 = document.getElementById('4');
var div5 = document.getElementById('5');
var div6 = document.getElementById('6');
var div7 = document.getElementById('7');
var div8 = document.getElementById('8');
var div9 = document.getElementById('9');

var winningCombos = [[div1,div2,div3], [div4,div5,div6], [div7,div8,div9], [div1,div4,div7], [div2,div5,div8], [div3,div6,div9], [div1,div5,div9], [div7,div5,div3]];

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

  checkWinner();
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


/* Function to check for winner */

function checkWinner(){
	console.log("checked for winner")

	for (var i = 0; i < winningCombos.length; i++) {

		if (winningCombos[i][0].innerText === ("O" || "X")  && winningCombos[i][1].innerText === ("O" || "X")  && winningCombos[i][2].innerText === ("O" || "X") ) {

		alert("You win!");
		resetBoard();
		}
	}
};








