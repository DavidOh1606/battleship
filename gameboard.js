function Tile() {
    this.hit = false;
    this.hasShip = false;
}

function GameBoard(width, length) {
    this.board = [];

    for (let row = 0; row < width; row++) {
        
        const rowArr = [];

        for (let col = 0; col < length; col++) {
            rowArr.push(new Tile());
        }

        this.board.push(rowArr);
    }

}

module.exports = GameBoard;