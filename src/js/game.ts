import Point from "./containers/point";

import { Event } from "./event/event";
import { EventBus, EventHandler } from "./event/eventbus";

export default class Game implements EventHandler {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;
	private _height: number = window.innerHeight;
	private _width: number = window.innerWidth;
	private _eventBus: EventBus;

	constructor() {
		this._canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this._canvas.width = this._width;
		this._canvas.height = this._height;
		this._ctx = this._canvas.getContext("2d");
		this._ctx.imageSmoothingEnabled = false;
		this._eventBus = EventBus.getInstance();

		this._eventBus.register("party", this);

	}

	public render(): void {

	//	let event: Event = new Event("party", "payload");
	//	this._eventBus.publish(event);


	}

	public handleEvent(event: Event): void {
	//	console.log("I got an event ->" + event.payload);
	}

}
