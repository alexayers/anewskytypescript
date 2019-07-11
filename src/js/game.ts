import Point from "./containers/point";

import { Event } from "./event/event";
import { EventBus, EventHandler } from "./event/eventbus";


export default class Game implements EventHandler {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;
	private _height: number = window.innerHeight;
	private _width: number = window.innerWidth;
	private _eventBus: EventBus;
	private _image: HTMLImageElement;

	constructor() {
		this._canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this._canvas.width = this._width;
		this._canvas.height = this._height;

		this._canvas.addEventListener("mousedown", this.mouseDown, false);


		this._ctx = this._canvas.getContext("2d");
		this._ctx.imageSmoothingEnabled = false;
		this._eventBus = EventBus.getInstance();

		this._eventBus.register("party", this);

		this._image = new Image();
		this._image.src = "assets/images/rooms/begin/begin1.png";

		console.log(this._image);

	}

	private mouseDown(event: MouseEvent): void {

		console.log(event);

	}

	public render(): void {

		//	let event: Event = new Event("party", "payload");
		//	this._eventBus.publish(event);

		this._ctx.fillRect(20, 20, 30, 30);

		this._ctx.drawImage(this._image, 0, 0, this._canvas.width, this._canvas.height);

	}

	public handleEvent(event: Event): void {
		//	console.log("I got an event ->" + event.payload);
	}

}
