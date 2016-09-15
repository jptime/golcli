var matrix = [];
var row = process.stdout.rows - 1 || 20;
var column = process.stdout.columns - 1 || 100;
for (var i = 0; i < row; i++) {
    matrix[i] = [];
    for (var j = 0; j < column; j++) {
        matrix[i][j] = Math.round(Math.random());
    }
}

module.exports = {matrix: matrix, row: row, column: column}