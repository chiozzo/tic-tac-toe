/*
Variables for DOM elements
*/

var board = document.getElementById("board");
var squares = board.getElementsByTagName('div');

var playerO = true;
var playerX = false;
var playerO_div = document.getElementById("playerO");
var playerX_div = document.getElementById("playerX");

var x_wins = 0;
var o_wins = 0;

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
  if (playerO) {
    this.innerText = "O";
    playerO = false;
    playerX = true
  } else {
    this.innerText = "X";
    playerX = false;
    playerO = true;
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

		if (winningCombos[i][0].innerText === "O" && winningCombos[i][1].innerText === "O" && winningCombos[i][2].innerText === "O") {
      console.log("someone won");
      alert("O wins!");
      o_wins += 1;
      playerO_div.innerText = o_wins;
      resetBoard();
    } else if (winningCombos[i][0].innerText === "X" && winningCombos[i][1].innerText === "X" && winningCombos[i][2].innerText === "X") {
      console.log("someone won");
      alert("X wins!");
      x_wins += 1;
      playerX_div.innerText = x_wins;
      resetBoard();
    }
  }
};








