const showScreen = require('./showScreen');
const screens = require('./screens');

function initialize() {
	document.getElementById('id-high-scores-back').addEventListener(
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
