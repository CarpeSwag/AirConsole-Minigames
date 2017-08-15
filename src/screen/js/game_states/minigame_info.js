// Minigame Info
module.exports = function() {};
module.exports.prototype = {
	preload: function() {
		var side = 'l';
		for (var i = 0; i < 2; ++i) {
			for (var j = 1; j <= 8; ++j) {
				var ribbon = document.getElementById('ribbon-' + side + j);
				var num = (i * 8) + j;
				var name = 'Player ' + num;
				ribbon.innerHTML = '<div></div><h5>' + name + '</h5>';
			}
			side = 'r';
		}
		
		var title = document.getElementById('minigame-name');
		title.innerHTML = 'Awesome Minigame';
		
		var blurb = document.getElementById('minigame-blurb');
		blurb.innerHTML = '';
		
		var desc = document.getElementById('minigame-description');
		desc.innerHTML = '';
		
		var container = document.getElementById('minigame-info');
		container.className = 'active';
	},
	create: function() {
		
	},
	update: function() {
		
	},
	render: function() {
		
	},
	startMinigame: function() {
		var container = document.getElementById('minigame-info');
		container.className = '';
	}
};
