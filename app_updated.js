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
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");

class Player {
    constructor(name, posiiton, money) {
        this.name = name;
        this.posiiton = posiiton;
        this.money = money;
    }
    rollDice() {
        let pos = Math.floor(Math.random() * 6) + 1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos) {
        this.posiiton += pos;
        console.log(this.posiiton);
        this.updateMoney();
    }
    updateMoney() {
        if (this.posiiton < board.length)
            this.money -= board[this.posiiton];
        else {
            this.posiiton %= 15;
            this.money -= board[this.posiiton];
        }
        console.log(player1);
        console.log(player2);

    }
}



let player1 = new Player("FACEPrep", 0, 1000);
let player2 = new Player("ProGrad", 0, 1000);

player1_button.addEventListener('click', function () {
    player1.rollDice();
}, false);
player2_button.addEventListener('click', function () {
    player2.rollDice();
}, false);