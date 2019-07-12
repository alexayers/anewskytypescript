import Point from "./containers/point";

import { Event } from "./event/event";
import { EventBus, EventHandler } from "./event/eventbus";
import { SceneManager } from "./managers/scenemanager";

export default class Game implements EventHandler {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;
	private _height: number = window.innerHeight;
	private _width: number = window.innerWidth;
	private _eventBus: EventBus;
	private _image: HTMLImageElement;
	private _sceneManager: SceneManager;

	constructor() {
		this._canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this._canvas.width = this._width;
		this._canvas.height = this._height;
		this._canvas.addEventListener("mousedown", this.mouseDown, false);
		this._ctx = this._canvas.getContext("2d");
		this._ctx.imageSmoothingEnabled = false;

	}

	public init(): void {
		console.log("Initializing game...")
		this._sceneManager = SceneManager.getInstance();


		console.log("Game initialized!")
	}

	private mouseDown(event: MouseEvent): void {

		console.log(event);

	}

	public render(): void {

		this._sceneManager.render(this._ctx, this._canvas);
		this._ctx.drawImage(this._image, 0, 0, this._canvas.width, this._canvas.height);
	}

	public handleEvent(event: Event): void {
		//	console.log("I got an event ->" + event.payload);
	}

}
