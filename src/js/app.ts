declare var require: any;
require('../css/main.css');

import Game from './game';

class App {
	private _game: Game;

	constructor(game: Game) {
		this._game = game;
	}

	public setup(): void {
		this._game.init();

		this.gameLoop();
	}

	private gameLoop(): void {
		// need to bind the current this reference to the callback
		requestAnimationFrame(this.gameLoop.bind(this));

		this._game.render();
		
	}
}

window.onload = () => {
	let app = new App(new Game());

	app.setup();
}
