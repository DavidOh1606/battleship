function Tile() {
    this.hit = false;
    this.ship = null;
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

    this.placeShip = function(ship, row, col) {
        if (row <= -1 || col <= -1 || row > width - ship.length || col > length - 1) {
            throw new Error("Invalid placement");
        }

        for (let i = row; i < row + ship.length; i++) {
            if (this.board[i][col].ship !== null && this.board[i][col].ship !== ship) {
                throw new Error("Overlapping other ship");
            }

            this.board[i][col].ship = ship;
        }
    }

    this.receiveAttack = function(row, col) {
        const tile = this.board[row][col];

        if (tile.hit) {
            throw new Error("Tile has already been attacked");
        }

        tile.hit = true;
        if (tile.ship !== null) {
            tile.ship.hit();
        }
    }

}

module.exports = GameBoard;