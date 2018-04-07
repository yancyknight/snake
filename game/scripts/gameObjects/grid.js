const cell = require('./cell');
const { drawRectangle } = require('../../../framework/graphics');

cells = [];

function getRandomBlankCell() {
    let row = Math.floor(Math.random() * cells.length);
    let col = Math.floor(Math.random() * cells[0].length);
    
    if(cells[row][col] == cell.cellType.blank) {
        return { row, col }
    }
    
    return getRandomBlankCell();
}

function initialize() {
    cells.length = 0;
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

    for(let i = 0; i < 15; i++) {
        var { row, col } = getRandomBlankCell();
        cells[row][col] = cell.cellType.obstacle;
    }

    var { row, col } = getRandomBlankCell();
    cells[row][col] = cell.cellType.food;
}

function render() {
    for(let i = 0; i < 50; i++) {
        for(let j = 0; j < 50; j++) {
            c = cells[i][j];

            drawRectangle({
                x: i * 20,
                y: j * 20,
                ...cell.colors[c]
            });
        }
    }
}

module.exports = {
    initialize,
    cells,
    render,
    getRandomBlankCell
}