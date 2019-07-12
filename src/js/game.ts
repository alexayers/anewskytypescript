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

		EventBus.getInstance().register("game", this);
	}

	public init(): void {
		console.log("Initializing game...")
		this._sceneManager = SceneManager.getInstance();


		console.log("Game initialized!")
	}

	private mouseDown(event: MouseEvent): void {

		EventBus.getInstance().publish(
			new Event("game", event)
		);

		

	}

	public render(): void {

		this._sceneManager.render(this._ctx, this._canvas);

		console.log(this._leftClick);

		if (!Inventory.getInstance().isExaming() && this._leftClick) {
			SceneManager.getInstance().processClick(this._mouseX, this._mouseY)
		} else {
			Inventory
				.getInstance()
				.processClick(
					this._leftClick,
					this._rightClick,
					this._mouseX,
					this._mouseY);
		}

		Inventory
			.getInstance()
			.processClick(
				this._leftClick,
				this._rightClick,
				this._mouseX,
				this._mouseY);

		Inventory.getInstance().render(this._ctx, this._canvas);


	}

	public handleEvent(event: Event): void {

		let mouseEvent = event.payload;

		if (mouseEvent.button == 0) {
			this._leftClick = true;
			this._rightClick = false;
		} else if (mouseEvent.button == 2) {
			this._leftClick = false;
			this._rightClick = true;
		}

		let canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this._mouseX = mouseEvent.clientX - canvas.offsetLeft;
		this._mouseY = ((mouseEvent.clientY - canvas.offsetTop) - 400) * -1;

		console.log("Clicked x=" + this._mouseX + " y= " + this._mouseY);
	}

}
