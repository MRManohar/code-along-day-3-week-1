var board = [
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110,
  120,
  130,
  140,
  150,
  160,
];
console.log(board);
var player1_button = document.getElementById("player-1");
console.log(player1_button);
var player2_button = document.getElementById("player-2");
console.log(player2_button);

player1_button.addEventListener("click", rollDice_1);
player2_button.addEventListener("click", rollDice_2);
var player1 = ["ProGrad", 0, 1000];
var player2 = ["FACEPrep", 0, 1000];

function rollDice_1() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log("Player one rolls", position);
  changePosition_1(player1[1], position);
}
function rollDice_2() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log("Player one rolls", position);
  changePosition_2(player2[1], position);
}

function changePosition_1(old, currentPos) {
  var newPosition = old + currentPos;
  player1[1] = newPosition;
  console.log(player1[1]);
  updateMoney_1(player1[1]);
}
function changePosition_2(old, currentPos) {
  var newPosition = old + currentPos;
  player2[1] = newPosition;
  console.log(player2[1]);
  updateMoney_2(player2[1]);
}
function updateMoney_1(p1) {
  var updateMoney = 0;
  if (p1 < board.length) updateMoney = player1[2] - board[p1 - 1];
  else {
    p1 = p1 % 15;
    updateMoney = player1[2] - board[p1 - 1];
  }
  console.log(updateMoney);
}
function updateMoney_2(p1) {
  var updateMoney = 0;
  if (p1 < board.length) updateMoney = player2[2] - board[p1 - 1];
  else {
    p1 = p1 % 15;
    updateMoney = player2[2] - board[p1 - 1];
  }
  console.log(updateMoney);
}
