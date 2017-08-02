// define global game container object
var PartyGame = { };

// Boot
PartyGame.Boot = function() {};
PartyGame.Boot.prototype = {
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

// Preloader state
PartyGame.Preloader = function() {};
PartyGame.Preloader.prototype = {
	preload: function() {
	},
	create: function() {
	},
	update: function() {
		// wait for first mp3 to properly decode
		var space = game.input.keyboard.addKeys({
			'space': Phaser.Keyboard.SPACEBAR
		});
		if(space.space.isDown) {
			this.state.start('Play');
		}
	},
	render: function() {
	}
};

// Play state
PartyGame.Play = function() {};
PartyGame.Play.prototype = {
	preload: function() {
	},
	create: function() {
	},
	update: function() {	
	},
	render: function() {
	}
};

PartyGame.MiniGameInfo = function() {};
PartyGame.MiniGameInfo.prototype = {
	preload: function() {
		
	},
	create: function() {
		
	},
	update: function() {
		
	},
	render: function() {
		
	}
};

PartyGame.End = function() {};
PartyGame.End.prototype = {
	preload: function() {
	},
	create: function() {
	},
	update: function() {	
	},
	render: function() {
	}
};

// init game
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
// add states
game.state.add('Boot', PartyGame.Boot);
game.state.add('Preloader', PartyGame.Preloader);
game.state.add('Play', PartyGame.Play);
game.state.start('Boot');