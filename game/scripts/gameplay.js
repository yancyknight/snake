const graphics = require('../../framework/graphics');
const input = require('../../framework/input');
const showScreen = require('./showScreen');
const mainMenu = require('./mainmenu');

const grid = require('./gameObjects/grid');

var myKeyboard = input.Keyboard(),
    cancelNextRequest = false,
    lastTimeStamp;

function initialize() {
    console.log('game initializing...');

    grid.initialize();

    // Create the keyboard input handler and register the keyboard commands
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_LEFT, function(){});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_RIGHT, function(){});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_UP, function(){});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_DOWN, function(){});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_ESCAPE, function() { cancelNextRequest = true; showScreen(mainMenu); });
}

function update(elapsedTime) {
    myKeyboard.update(elapsedTime);
}

function render() {
    graphics.clear();
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
