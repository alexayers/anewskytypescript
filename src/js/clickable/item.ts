
import {ClickBox} from './clickbox';

export class Item extends ClickBox {
    private _imageExamine: string;
    private _value: string;
    private _canGrab: boolean;
    private _onScreen: boolean;
    private _canClick : boolean;
    private _canExamine: boolean;
    private _callBack: Function;

    constructor(itemBuilder: ItemBuilder) {
        super(itemBuilder.lx,
            itemBuilder.ly,
            itemBuilder.hx,
            itemBuilder.hy
            );
    }
    
}

export class ItemBuilder {
    private _lx : number;
    private _ly : number;
    private _hx : number;
    private _hy : number;
    private _title: string;
    private _clickSound: string;
    private _imageExamine: string;
    private _value: string;
    private _canGrab: boolean;
    private _onScreen: boolean;
    private _canClick : boolean;
    private _canExamine: boolean;
    private _callBack: Function;
    

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

}