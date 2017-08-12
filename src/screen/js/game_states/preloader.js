// Preloader state
module.exports = function() {};
module.exports.prototype = {
	preload: function() {
	},
	create: function() {
	},
	update: function() {
		// wait for first mp3 to properly decode
		/*var space = game.input.keyboard.addKeys({
			'space': Phaser.Keyboard.SPACEBAR
		});
		if(space.space.isDown) {
			this.state.start('Play');
		}*/
	},
	render: function() {
	}
};
