
import { AnimatedFrame } from "./animatedframe";
import { Door } from "../clickable/door";
import { Item } from "../clickable/item";
import { EventBus, EventHandler } from "../event/eventbus";
import { Event } from "../event/event";
import { AudioManager } from "../managers/audiomanager";
import { Inventory } from "../containers/inventory";
import { ItemManager } from "../managers/itemmanager";

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
        this._ambientSound = null;

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
        this._ambientSound = filename;
        AudioManager.getInstance().registerLoop(filename);
    }

    public addRenderCallBack(func: Function): void {
        this._renderCallBack = func;
    }

    public addClickCallback(func: Function): void {
        this._clickCallBack = func;
    }

    public playAmbience(): void {
        if (this._ambientSound != null) {
            console.log("Playing loop " + this._ambientSound);
            AudioManager.getInstance().playLooped(this._ambientSound);
        }
    }

    public stopAmbience(): void {
        if (this._ambientSound != null) {
            AudioManager.getInstance().stop(this._ambientSound);
        }

    }

    public addDoor(door: Door): void {
        if (door.title != null) {
            EventBus
                .getInstance()
                .register(door.title, door);
        }

        this._doors.push(door);
    }

    public addItem(item: Item): void {
        ItemManager
            .getInstance()
            .register(item);

        this._items.push(item);
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
                console.log("Point in item");
                return;
            }

        });

        this._doors.forEach(function (door) {
            door.isPointWithinDoor(x, y);
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

        this._items.forEach(function (item) {
            item.render();
        });

        if (this._foreground.getTotalFrames() > 0) {
            this._foreground.render(renderContext, canvas);
        }

      

    }

    public handleEvent(event: Event): void {
        // Stub
    }

    get ambienceName() : string {
        return this._ambientSound;
    }
}

