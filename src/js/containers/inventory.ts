
import {Item} from "../clickable/item";

export class Inventory {
    private static _instance: Inventory;
    private _slots : Array<Item>;
    private _isExamining: boolean;
    private _selectedIdx: number;
    private _xOffset: number;
    private _yOffset: number;
    private _highlight : string;


    private constructor() {
        this._slots = new Array(6);
        this._isExamining = false;
        this._selectedIdx = -1;
        this._xOffset = 30;
        this._yOffset = 360;
    }

    public static getInstance() {
        if (!Inventory._instance) {
            Inventory._instance = new Inventory();
        }

        return Inventory._instance;
    }
}