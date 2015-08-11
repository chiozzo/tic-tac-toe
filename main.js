/*
Variables for DOM elements
*/

var board = $('#board');
var squares = board.children('div');

var playerO = false;
var playerX = true;
var playerO_div = $("#playerO");
var playerX_div = $("#playerX");

var x_wins = 0;
var o_wins = 0;

var reset = $("#reset");

var div1 = $("#1");
var div2 = $("#2");
var div3 = $("#3");
var div4 = $("#4");
var div5 = $("#5");
var div6 = $("#6");
var div7 = $("#7");
var div8 = $("#8");
var div9 = $("#9");

var winningCombos = [[div1,div2,div3], [div4,div5,div6], [div7,div8,div9], [div1,div4,div7], [div2,div5,div8], [div3,div6,div9], [div1,div5,div9], [div7,div5,div3]];

/*
Clicked event handler add in X & O and switch player
*/

function clicked(theItemClicked){

  if (theItemClicked.text() === "") {

    if (playerX) {
      theItemClicked.text("X");
      playerO = true;
      playerX = false;
    } else {
      theItemClicked.text("O");
      playerX = true;
      playerO = false;
    }

    checkWinner();
  }
};

/*
Add Event Handler for Clicking on Divs
*/

squares.each(function(){
  var itemClicked = $(this);

  $(this).click(function(){
    clicked(itemClicked);
  });
});


/*
Add event handler for button to reset board
*/

function resetBoard(e) {
  console.log("reset called");

  squares.each(function(){
    $(this).text("");
  });
  playerO = false;
  playerX = true;

}

reset.click(resetBoard);


/* Function to check for winner */

function checkWinner(){
	console.log("checked for winner")

  $.each(winningCombos, function(index, value){

		if (value[0].text() === "O" && value[1].text() === "O" && value[2].text() === "O") {
      console.log("someone won");
      alert("O wins!");
      o_wins += 1;
      playerO_div.text(o_wins);
      resetBoard();

    } else if (value[0].text() === "X" && value[1].text() === "X" && value[2].text() === "X") {
      console.log("someone won");
      alert("X wins!");
      x_wins += 1;
      playerX_div.text(x_wins);
      resetBoard();
    }
  });
};








