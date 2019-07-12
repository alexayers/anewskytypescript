
import { ClickBox } from "./clickbox";
import { EventHandler, EventBus } from "../event/eventbus";
import { Event } from "../event/event";
import { AudioManager } from "../managers/audiomanager";
import { Inventory } from "../containers/inventory";

export class Door extends ClickBox implements EventHandler {

    private _key: string;
    private _isLocked: boolean;
    private _destination: string;
    private _walkSound: string;

    constructor(doorBuilder: DoorBuilder) {
        super(doorBuilder.lx,
            doorBuilder.ly,
            doorBuilder.hx,
            doorBuilder.hy
        );
        this._key = doorBuilder.key;
        this._isLocked = doorBuilder.locked;
        this._destination = doorBuilder.destination;
        this._walkSound = doorBuilder.walkSound;
        this._title = doorBuilder.title;
        this._clickSound = doorBuilder.clickSound;

    }


    public isPointWithinDoor(x: number, y: number): boolean {

        if (this.isPointInSquare(x, y)) {


            if (this._clickSound != null) {
                AudioManager.getInstance().play(this._clickSound);
            }

            if (this._isLocked) {
                if (Inventory.getInstance().getSelectedItem() != null) {
                    if (Inventory.getInstance().getSelectedItem().title != this._key) {
                        console.log("Door is locked");
                        return true;
                    } else if (this._isLocked && Inventory.getInstance().getSelectedItem().title == this._key) {
                        this._isLocked = false;
                        Inventory.getInstance().dropSelected();
                    }
                }
            }

            if (this._walkSound != null) {
                AudioManager.getInstance().play(this._walkSound);
            }

            EventBus
                .getInstance()
                .publish(new Event('sceneManager', this._destination));

            return true;
        } else {
            false;
        }
    }

    public handleEvent(event: Event): void {
        if (event.payload == "unlock") {
            this._isLocked = false;
        }
    }

}

export class DoorBuilder {
    private _key: string;
    private _isLocked: boolean;
    private _destination: string;
    private _walkSound: string;
    private _lx: number;
    private _ly: number;
    private _hx: number;
    private _hy: number;
    private _title: string;
    private _clickSound: string;

    constructor(lx: number, ly: number, hx: number, hy: number) {
        this._lx = lx;
        this._ly = ly;
        this._hx = hx;
        this._hy = hy;
        this._key = null;
        this._isLocked = false;
        this._clickSound = null;
    }

    public requiresKey(key: string): DoorBuilder {
        this._key = key;
        return this;
    }

    public withDestination(destination: string): DoorBuilder {
        this._destination = destination;
        return this;
    }

    public withWalkSound(filename: string): DoorBuilder {
        this._walkSound = filename;
        return this;
    }

    public withTitle(title: string): DoorBuilder {
        this._title = title;
        return this;
    }

    public lock(): DoorBuilder {
        this._isLocked = true;
        return this;
    }

    public openWith(key: string): DoorBuilder {
        this._key = key;
        return this;
    }

    public build(): Door {
        return new Door(this);
    }


    get key() {
        return this._key;
    }

    get locked() {
        return this._isLocked;
    }

    get lx(): number {
        return this._lx;
    }

    get ly(): number {
        return this._ly;
    }

    get hx(): number {
        return this._hx;
    }

    get hy(): number {
        return this._hy;
    }


    get destination(): string {
        return this._destination;
    }

    get walkSound(): string {
        return this._walkSound;
    }

    get title(): string {
        return this._title;
    }

    get clickSound(): string {
        return this._clickSound;
    }



}