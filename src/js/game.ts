import Point from "./containers/point";

import { Event } from "./event/event";
import { EventBus, EventHandler } from "./event/eventbus";
import { SceneManager } from "./managers/scenemanager";
import { Inventory } from "./containers/inventory";

export default class Game implements EventHandler {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;
	private _height: number = window.innerHeight;
	private _width: number = window.innerWidth;
	private _eventBus: EventBus;
	private _leftClick: boolean;
	private _rightClick: boolean;
	private _mouseX: number;
	private _mouseY: number;
	private _image: HTMLImageElement;
	private _sceneManager: SceneManager;

	constructor() {
		this._canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this._canvas.width = this._width;
		this._canvas.height = this._height;
		this._canvas.addEventListener("mousedown", this.mouseDown, false);
		this._ctx = this._canvas.getContext("2d");
		this._ctx.imageSmoothingEnabled = false;


		this._rightClick = false;
		this._leftClick = false;
	}

	public init(): void {
		console.log("Initializing game...")
		this._sceneManager = SceneManager.getInstance();


		console.log("Game initialized!")
	}

	private mouseDown(event: MouseEvent): void {

		if (event.button == 0) {
			this._leftClick = true;
			this._rightClick = false;
		} else if (event.button == 2) {
			this._rightClick = true;
			this._leftClick = false;
		}

		let canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this._mouseX = event.clientX - canvas.offsetLeft;
		this._mouseY = event.clientY - canvas.offsetTop;

		console.log("Clicked x=" + this._mouseX + " y= " + this._mouseY);

	}

	public render(): void {

		this._sceneManager.render(this._ctx, this._canvas);

		if (!Inventory.getInstance().isExaming() && this._leftClick) {
			this._sceneManager.processClick(this._mouseX, this._mouseY)
		}

		Inventory.getInstance().render(this._ctx, this._canvas);

		Inventory
			.getInstance()
			.processClick(
				this._leftClick,
				this._rightClick,
				this._mouseX,
				this._mouseY);

		this._rightClick = false;
		this._leftClick = false;
	}

	public handleEvent(event: Event): void {
		//	console.log("I got an event ->" + event.payload);
	}

}
