
import {ClickBox} from "./clickbox";

export class Door extends ClickBox {

    private key : string;
    private isLocked: boolean;
    private destination: string;
    private walkSound: string;

    constructor(doorBuilder: DoorBuilder) {
        super(doorBuilder.lx,
            doorBuilder.ly,
            doorBuilder.hx,
            doorBuilder.hy
            );
        this.key = doorBuilder.key;
        this.isLocked = doorBuilder.locked;
    }

 
}

export class DoorBuilder {
    private _key : string;
    private _isLocked: boolean;
    private _destination: string;
    private _walkSound: string;
    private _lx : number;
    private _ly : number;
    private _hx : number;
    private _hy : number;
    private _title: string;
    private _clickSound: string;

    constructor(lx:number, ly: number, hx: number, hy:number) {
        this._lx = lx;
        this._ly = ly;
        this._hx = hx;
        this._hy = hy;
        this._key = null;
        this._isLocked = false;
    }

    get key() {
        return this._key;
    }

    get locked() {
        return this._isLocked;
    }

    get lx() : number {
        return this.lx;
    }

    get ly(): number {
        return this.ly;
    }

    get hx(): number {
        return this.hx;
    }

    get hy(): number {
        return this.hy;
    }

    destination(destination: string) {
        this._destination = destination;
        return this;
    }

    walkSound(filename: string) {
        this._walkSound = filename;
        return this;
    }

    lock() {
        this._isLocked = true;
        return this;
    }

    openWith(key: string)  {
        this._key = key;
        return this;
    }

    build() {
        return new Door(this);
    }

}