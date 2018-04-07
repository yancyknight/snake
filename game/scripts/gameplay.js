const graphics = require('../../framework/graphics');
const input = require('../../framework/input');
const showScreen = require('./showScreen');
const mainMenu = require('./mainmenu');
const highScores = require('./highscores');

const grid = require('./gameObjects/grid');
const snake = require('./gameObjects/snake');

let myKeyboard = input.Keyboard();
let cancelNextRequest = false;
let lastTimeStamp;
let moveInterval = 150;
let timeSinceLastMove = 0;
let render = null;
let update = null;

function initialize() {
    console.log('game initializing...');

    grid.initialize();
    snake.initialize();
    render = countdownRender;
    update = countdownUpdate;

    // Create the keyboard input handler and register the keyboard commands
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_LEFT, function(){ snake.changeDirection('left')});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_RIGHT, function(){ snake.changeDirection('right')});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_UP, function(){ snake.changeDirection('up')});
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_DOWN, function(){ snake.changeDirection('down')});
}

function gameOver() {
    cancelNextRequest = true;

    const ls = require('../../framework/LocalStorage');
    let highscores = ls.get('highscores');

    // If there are no high scores yet
    if(typeof highscores.scores === 'undefined' || highscores.scores.length == 0) {
        let name = window.prompt('Congratulations! You made a high score!');

        highscores.scores = [ { name, score: snake.cells.length} ];
        ls.set('highscores', {field: 'scores', value: highscores.scores});
    } else {
        let lowest = highscores.scores[highscores.scores.length - 1];
        if (snake.cells.length > lowest.score || highscores.scores.length < 5) {
            let name = window.prompt('Congratulations! You made a high score!');
            highscores.scores.push({ name, score: snake.cells.length});
            highscores.scores.sort(function(a, b) {
                return b.score - a.score;
            });
            highscores.scores = highscores.scores.slice(0, 5);
        }
        ls.set('highscores', {field: 'scores', value: highscores.scores});
    }
    initialize();
    showScreen(highScores);
}

function gameUpdate(elapsedTime) {
    myKeyboard.update(elapsedTime);

    var successfulMove = true;
    timeSinceLastMove += elapsedTime;
    if(timeSinceLastMove > moveInterval) {
        successfulMove = snake.update(elapsedTime);
        timeSinceLastMove -= moveInterval;
    }

    if(!successfulMove) {
        gameOver();
    }
}

function gameRender() {
    graphics.clear();
    grid.render();
    snake.render();
}

let countdownTime = 0;
function countdownUpdate(elapsedTime) {
    countdownTime += elapsedTime;
}

function countdownRender() {
    gameRender();
    if(countdownTime < 1000) {
        graphics.drawText({
            text: 'Start in 3!',
            x: 400,
            y: 400,
            fill: '#fff'
        });
    } else if (countdownTime < 2000) {
        graphics.drawText({
            text: 'Start in 2!',
            x: 400,
            y: 400,
            fill: '#fff'
        });
    } else if (countdownTime < 3000) {
        graphics.drawText({
            text: 'Start in 1!',
            x: 400,
            y: 400,
            fill: '#fff'
        });
    } else {
        countdownTime = 0;
        render = gameRender;
        update = gameUpdate;
    }
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
