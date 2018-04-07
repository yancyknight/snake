const screens = require('./screens');
const showScreen = require('./showScreen');

//------------------------------------------------------------------
//
// This function performs the one-time game initialization.
//
//------------------------------------------------------------------
function initialize() {
	let screen = null;

	// Go through each of the screens and tell them to initialize
	for (screen in screens) {
		if (screens.hasOwnProperty(screen)) {
			screens[screen].initialize();
		}
	}
	
	// Make the main-menu screen the active one
	showScreen('main-menu');
}

window.onload = function() {
	initialize();
};
