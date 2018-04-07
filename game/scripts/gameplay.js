const graphics = require('../../framework/graphics');
const input = require('../../framework/input');
const showScreen = require('./showScreen');
const mainMenu = require('./mainmenu');

const grid = require('./gameObjects/grid');
const snake = require('./gameObjects/snake');

let myKeyboard = input.Keyboard();
let cancelNextRequest = false;
let lastTimeStamp;
let moveInterval = 150;
let timeSinceLastMove = 0;

function initialize() {
    console.log('game initializing...');

    grid.initialize();
    snake.initialize();

    // Create the keyboard input handler and register the keyboard commands
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_LEFT, function(){ snake.changeDirection('left')});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_RIGHT, function(){ snake.changeDirection('right')});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_UP, function(){ snake.changeDirection('up')});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_DOWN, function(){ snake.changeDirection('down')});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_ESCAPE, function() { cancelNextRequest = true; showScreen(mainMenu); });
}

function update(elapsedTime) {
    myKeyboard.update(elapsedTime);

    timeSinceLastMove += elapsedTime;
    if(timeSinceLastMove > moveInterval) {
        snake.update(elapsedTime);
        timeSinceLastMove -= moveInterval;
    }
}

function render() {
    graphics.clear();
    grid.render();
    snake.render();
}

//------------------------------------------------------------------
//
// This is the Game Loop function!
//
//------------------------------------------------------------------
function gameLoop(time) {
    
    update(time - lastTimeStamp);
    lastTimeStamp = time;
    
    render();

    if (!cancelNextRequest) {
        requestAnimationFrame(gameLoop);
    }
}

function run() {
    lastTimeStamp = performance.now();

    // Start the animation loop
    cancelNextRequest = false;
    requestAnimationFrame(gameLoop);
}

module.exports = {
    initialize: initialize,
    run: run,
    id: 'game-play'
};
