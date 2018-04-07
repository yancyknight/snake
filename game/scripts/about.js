const game = require('./game');
const showScreen = require('./showScreen');

function initialize() {
	document.getElementById('id-about-back').addEventListener(
		'click',
		function() { showScreen('main-menu'); });
}

function run() {
	//
	// I know this is empty, there isn't anything to do.
}

module.exports = {
	initialize : initialize,
	run : run
};
