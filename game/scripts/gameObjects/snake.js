const { getRandomBlankCell } = require('./grid');
const { drawRectangle } = require('../../../framework/graphics');
const cell = require('./cell');

let cells = [];
let currentDirection = ''
let timeSinceLastMove = 0;
let moveInterval = 150;

function changeDirection(dir) {
    if(dir == 'left' && currentDirection != 'right') {
        currentDirection = dir
    } else if(dir == 'right' && currentDirection != 'left') {
        currentDirection = dir
    } else if(dir == 'up' && currentDirection != 'down') {
        currentDirection = dir
    } else if(dir == 'down' && currentDirection != 'up') {
        currentDirection = dir
    }
}

function initialize() {
    cells.length = 0;
    cells.push(getRandomBlankCell());
}

function update(elapsedTime) {
    timeSinceLastMove += elapsedTime;
    if(timeSinceLastMove > moveInterval) {
        
    }
}

function render() {
    for(let i = 0; i < cells.length; i++) {
        c = cells[i];

        drawRectangle({
            x: c.row * 20,
            y: c.col * 20,
            ...cell.colors[cell.cellType.snake]
        });
    }
}

module.exports = {
    cells,
    initialize,
    render,
    changeDirection,
    update
}