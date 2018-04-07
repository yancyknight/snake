const grid = require('./grid');
const { drawRectangle } = require('../../../framework/graphics');
const cell = require('./cell');

let cells = [];
let currentDirection = ''
let needsToGrow = 0;

function getBlankCell() {
    let blankCell = grid.getRandomBlankCell();
    for (let i = 0; i < cells.length; i++) {
        if(cells[i].row == blankCell.row && cells[i].col == blankCell.col) {
            return getBlankCell();
        }
    }
    return blankCell;
}

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
    cells.push(grid.getRandomBlankCell());
    needsToGrow = 0;
    currentDirection = '';
}

function move() {
    let head = cells[cells.length -1];

    if(needsToGrow) {
        needsToGrow -= 1;
    } else {
        cells.shift();
    }

    switch (currentDirection) {
        
        case 'left':
            cells.push({row: head.row - 1, col: head.col});
            break;
        
        case 'right':
            cells.push({row: head.row + 1, col: head.col});
            break;
        
        case 'up':
            cells.push({row: head.row, col: head.col - 1});
            break;

        case 'down':
            cells.push({row: head.row, col: head.col + 1});
            break;
    }
}

function update(elapsedTime) {
    if(!currentDirection) return true;
    
    move();

    let head = cells[cells.length -1];

    // If you hit an obstacle or a wall
    if(grid.cells[head.row][head.col] == cell.cellType.obstacle || grid.cells[head.row][head.col] == cell.cellType.wall) {
        return false;
    }

    // If you hit yourself
    for (let i = 0; i < cells.length - 1; i++) {
        if(cells[i].row == head.row && cells[i].col == head.col) {
            return false;
        }
    }

    // If you hit a food
    if(grid.cells[head.row][head.col] == cell.cellType.food) {
        needsToGrow = 3;

        grid.cells[head.row][head.col] = cell.cellType.blank;

        let newFood = getBlankCell();
        grid.cells[newFood.row][newFood.col] = cell.cellType.food;
    }
    return true;
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