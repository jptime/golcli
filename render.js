var charm = require('charm')();

charm.pipe(process.stdout);
charm.reset();

module.exports = {
    renderGrid: function(grid) {
        grid.forEach(function(row, y) {
            row.forEach(function(cell, x) {
                charm.position(x+1, y+1).foreground(cell == 1 ? 'green' : 'red').write(cell == 1? String.fromCharCode(9787): '.')
            })
        })
    }

}