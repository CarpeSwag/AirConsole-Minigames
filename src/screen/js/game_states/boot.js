// Boot
module.exports = function() {};
module.exports.prototype = {
	init: function() {
		// don't allow losing browser focus to halt game
		this.stage.disableVisibilityChange = true;
	},
	preload: function() {
		// ready the asset we need to display during preload
	},
	create: function() {
		this.state.start('Preloader');
	}
};
