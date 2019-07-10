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

    public setClickSound(clickSound: string) : void {
        this._clickSound = clickSound;
    }

    public setTitle(title : string): void {
        this._title = title;
    }

    public getTitle() : string {
        return this._title;
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