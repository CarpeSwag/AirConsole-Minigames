// define global game container object
var PartyGame = { };
PartyGame.Boot = require('./game_states/boot.js');
PartyGame.Preloader = require('./game_states/preloader.js');
PartyGame.Play = require('./game_states/play.js');
PartyGame.MiniGameInfo = require('./game_states/minigame_info.js');
PartyGame.End = require('./game_states/end.js');

// init game
console.log(PartyGame.Boot);
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

// add states
game.state.add('Boot', PartyGame.Boot);
game.state.add('Preloader', PartyGame.Preloader);
game.state.add('Play', PartyGame.Play);
game.state.start('Boot');
