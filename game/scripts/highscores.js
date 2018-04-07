
function initialize() {
	const showScreen = require('./showScreen');
	const mainMenu = require('./mainmenu');
	document.getElementById('id-high-scores-back').addEventListener(
		'click',
		function() { showScreen(mainMenu); });
	document.getElementById('highscores-reset').addEventListener(
		'click',
		function() { require('../../framework/LocalStorage').set('highscores', {field: 'scores', value: []}); run();});
}

function run() {
	const ls = require('../../framework/LocalStorage');
	
	let highscores = ls.get('highscores');
	if(typeof highscores.scores == 'undefined') highscores.scores = [];

	var str = '';
	for (let i = 0; i < highscores.scores.length; i++) {
		str += `<li>${highscores.scores[i].name} - ${highscores.scores[i].score}</li>`
	}
	let ol = document.getElementById('highscores-ol');
	ol.innerHTML = str;
}

module.exports = {
	initialize: initialize,
	run: run,
	id: 'high-scores'
};
