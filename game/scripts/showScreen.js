const about = require('./about');
const help = require('./help');
const gameplay = require('./gameplay');
const mainmenu = require('./mainmenu');
const highScores = require('./highscores');

const screens = {
    about,
    help,
    'game-play': gameplay,
    'main-menu': mainmenu,
    'high-scores': highScores
};

module.exports = function showScreen(id) {
	let screen = 0;
	let active = null;

	// Remove the active state from all screens.  There should only be one...
	active = document.getElementsByClassName('active');
	for (screen = 0; screen < active.length; screen++) {
		active[screen].classList.remove('active');
	}

	// Tell the screen to start actively running
	screens[id].run();

	// Then, set the new screen to be active
	document.getElementById(id).classList.add('active');
}