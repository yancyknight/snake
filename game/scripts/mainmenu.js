const showScreen = require('./showScreen');
console.log(`showScreen`, showScreen);

function initialize() {
	//
	// Setup each of menu events for the screens
	document.getElementById('id-new-game').addEventListener(
		'click',
		function() {showScreen('game-play'); });
	
	document.getElementById('id-high-scores').addEventListener(
		'click',
		function() { showScreen('high-scores'); });
	
	document.getElementById('id-help').addEventListener(
		'click',
		function() { showScreen('help'); });
	
	document.getElementById('id-about').addEventListener(
		'click',
		function() { showScreen('about'); });
}

function run() {
	//
	// I know this is empty, there isn't anything to do.
}

module.exports = {
	initialize : initialize,
	run : run
};
