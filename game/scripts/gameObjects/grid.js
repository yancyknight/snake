const cell = require('./cell');
cells = [];

function initialize() {
    for(let i = 0; i < 50; i++) {
        let row = [];
        for(let j = 0; j < 50; j++) {
            if(i == 0 || i == 49 || j == 0 || j == 49) {
                row.push(cell.cellType.wall);
            } else {
                row.push(cell.cellType.blank);
            }
        }
        cells.push(row);
    }
}

module.exports = {
    initialize,
    cells
}