class Base {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 1;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y],
        ];
    }
    chooseNearFieldsByIndex(ch) {
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (matrix[y] && matrix[y][x] == ch) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y],
        ];
    }
}