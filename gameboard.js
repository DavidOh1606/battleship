const { resolveWatchPlugin } = require("jest-resolve");

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
        }


        for (let i = row; i < row + ship.length; i++) {
            this.board[i][col].ship = ship;
        }
    }

    this.rotateShip = function(row, col) {
        const ship = this.board[row][col].ship;
        if (ship === null) {
            throw new Error("No ship");
        }

        const [startRow, startCol] = findEnd(row, col);

        let vertical = true;

        if (startCol !== this.board[0].length && 
            this.board[startRow][startCol].ship === this.board[startRow][startCol + 1].ship) {

            vertical = false;
        }

        if (vertical) {
            for (let i = startRow + 1; i < startRow + ship.length; i++) {
                this.board[i][startCol].ship = null;

            }
        }



        function findEnd(row, col) {
            let startRow = row;
            let startCol = col;

            while (startRow > 0 && 
                this.board[startRow][startCol].ship === this.board[startRow - 1][startCol].ship) {
                
                startRow--;
            }

            while (startCol > 0 && 
                this.board[startRow][startCol].ship === this.board[startRow][startCol - 1].ship) {
                
                startCol--;
            }

            return [startRow, startCol];
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

    this.allShipsSunk = function() {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[0].length; col++) {
                if (this.board[row][col].ship !== null && !this.board[row][col].hit) {
                    return false;
                }
            }
        }

        return true;
    }

}

module.exports = GameBoard;