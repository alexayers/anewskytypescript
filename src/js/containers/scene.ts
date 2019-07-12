
import { AnimatedFrame } from "./animatedframe";
import { Door } from "../clickable/door";
import { Item } from "../clickable/item";
import { EventBus, EventHandler } from "../event/eventbus";
import { Event } from "../event/event";
import { AudioManager } from "../managers/audiomanager";
import { Inventory } from "../containers/inventory";

export class Scene implements EventHandler {
    private _background: AnimatedFrame;
    private _middleground: AnimatedFrame;
    private _foreground: AnimatedFrame;
    private _items: Array<Item>;
    private _doors: Array<Door>;
    private _ambientSound: string;
    private _clickCallBack: Function;
    private _renderCallBack: Function;

    constructor() {
        this._background = new AnimatedFrame();
        this._middleground = new AnimatedFrame();
        this._foreground = new AnimatedFrame();

        this._items = new Array();
        this._doors = new Array();
    }

    public addBackgroundImage(filename: string): void {
        this._background.addFrame("assets/images/rooms/" + filename);
    }

    public addMiddlegroundImage(filename: string): void {
        this._middleground.addFrame("assets/images/rooms/" + filename);
    }

    public addForegroundImage(filename: string): void {
        this._foreground.addFrame("assets/images/rooms/" + filename);
    }

    public addAmbience(filename: string): void {

    }

    public addClickCallback(func: Function): void {
        this._clickCallBack = func;
    }

    public playAmbience(): void {
        if (this._ambientSound != null) {

        }
    }

    public stopAmbience(): void {

    }

    public addDoor(door: Door): void {
        if (door.title != null) {
            EventBus
                .getInstance()
                .register(door.title, door);
        }
    }

    public addItem(item: Item): void {

    }

    public clearBackground(): void {
        this._background = new AnimatedFrame();
    }

    public clearMiddleground(): void {
        this._middleground = new AnimatedFrame();
    }

    public clearForeground(): void {
        this._foreground = new AnimatedFrame();
    }

    public processClick(x: number, y: number): void {

        this._items.forEach(function (item) {

            if (item.isPointWithItem(x, y)) {
                return;
            }

        });

        this._doors.forEach(function (door) {

            if (door.isPointWithinDoor(x, y)) {
                console.log("Clicked in door");
            }

        });

        if (this._clickCallBack != null) {
            this._clickCallBack.call(x, y);
        }

    }

    public render(renderContext: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {

        if (this._background.getTotalFrames() > 0) {
            this._background.render(renderContext, canvas);
        }

        if (this._middleground.getTotalFrames() > 0) {
            this._middleground.render(renderContext, canvas);
        }

        if (this._foreground.getTotalFrames() > 0) {
            this._foreground.render(renderContext, canvas);
        }

    }

    public handleEvent(event: Event): void {
        // Stub
    }

}

