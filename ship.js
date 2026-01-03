function Ship(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;

    this.hit = function() {
        this.timesHit++;

        this.sunk = this.isSunk();

    }

    this.isSunk = function() {
        if (this.timesHit >= this.length) {
            return true;
        }

        return false;
    }
}

module.exports = Ship;