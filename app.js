var renderit = require('./render.js').renderGrid
var seed = require('./seed.js');
var matrix = seed.matrix;
var gridRow = seed.row;
var gridColumn = seed.column;

renderit(matrix)

var GOL = {
    cycle: function() {
        var aliveArr = [];
        var deadArr = [];
        matrix.forEach(function(row, rowindex) {
            row.forEach(function(cell, columnindex) {
                var alive = 0;
                var dead = 0;
                var neighbors = GOL.getTheNeighbors(rowindex, columnindex);
                neighbors.forEach(function(coords) {
                    GOL.getCell(coords[0], coords[1]) ? alive += 1 : dead += 1;
                })
                GOL.checkIfAlive(cell, alive, dead) ? aliveArr.push([rowindex, columnindex]) : deadArr.push([rowindex, columnindex]);
            })
        })
        aliveArr.forEach(function(place) {
            matrix[place[0]][place[1]] = 1;
        })
        deadArr.forEach(function(place) {
            matrix[place[0]][place[1]] = 0;
        })
        renderit(matrix)
    },
    getTheNeighbors: function(row, column) {
        return [
            [row - 1 < 0 ? gridRow - 1 : row - 1, column - 1 < 0 ? gridColumn - 1 : column - 1],
            [row - 1 < 0 ? gridRow - 1 : row - 1, column],
            [row - 1 < 0 ? gridRow - 1 : row - 1, column + 1 > 0 ? gridColumn + 1 : column + 1],
            [row, column - 1 < 0 ? gridColumn - 1 : column - 1],
            [row, column + 1 > gridColumn + 1 ? 0 : column + 1],
            [row + 1 > gridRow - 1 ? 0 : row + 1, column - 1 < 0 ? 0 : column - 1],
            [row + 1 > gridRow - 1 ? 0 : row + 1, column],
            [row + 1 > gridRow - 1 ? 0 : row + 1, column + 1 > gridColumn - 1 ? 0 : column + 1]
        ]
    },
    getCell: function(row, column) {
        return matrix[row][column];
    },
    checkIfAlive: function(cell, alive, dead) {
        if (cell == 0 && alive == 3) {
            return true
        }
        if (alive < 2 || alive > 3) {
            return false
        }
        return !!cell
    }
}

//Main Game Loop
var Game = setInterval(function() {
    GOL.cycle();
}, 500)