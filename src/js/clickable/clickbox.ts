import { throws } from "assert";


export class ClickBox {
    private _lx : number;
    private _ly : number;
    private _hx : number;
    private _hy : number;
    private _title: string;
    private _clickSound: string;

    constructor(lx: number, ly: number, hx: number, hy :number) {
        this._lx = lx;
        this._ly = ly;
        this._hx = hx;
        this._hy = hy ;
    }

    get title() : string {
        return this._title;
    }

    get lx() : number {
        return this._lx;
    }

    get ly() : number {
        return this._ly;
    }

    get hx() : number {
        return this._hx;
    }

    get hy() : number {
        return this._hy;
    }

    get clickSound() : string {
        return this._clickSound;
    }

    public isPointInSquare(x: number, y : number) : boolean {
        if (x >= this._lx &&
            x <= this._hx &&
            y >= this._ly &&
            y <= this._hx) {
                return true;
            } else {
                return false;
            }
    }

}