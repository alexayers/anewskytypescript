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
		this._canvas.addEventListener("mousedown", (mouseEvent) => {

			if (mouseEvent.button == 0) {
				this._leftClick = true;
				this._rightClick = false;
			} else if (mouseEvent.button == 2) {
				this._leftClick = false;
				this._rightClick = true;
			}

		
			this._mouseX = mouseEvent.clientX - this._canvas.offsetLeft;
			this._mouseY = ((mouseEvent.clientY - this._canvas.offsetTop) - 800) * -1;

			console.log("Clicked x=" + this._mouseX + " y= " + this._mouseY);
		}, false);

		this._canvas.addEventListener("mousemove", (mouseEvent) => {

			this._mouseX = mouseEvent.clientX - this._canvas.offsetLeft;
			this._mouseY = ((mouseEvent.clientY - this._canvas.offsetTop) - 800) * -1;

			

		}, false);

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

	public render(): void {

		this._ctx.clearRect(0,0,this._canvas.width, this._canvas.height);
		this._sceneManager.render(this._ctx, this._canvas);

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

		this._ctx.fillStyle = "#ffffff";
		this._ctx.font = "40px Times New Roman";
		this._ctx.fillText("x:" + this._mouseX + " y:" + this._mouseY, 50, 50);

		this._leftClick = false;
		this._rightClick = false;
	}

	public handleEvent(event: Event): void {

		
	}

}
