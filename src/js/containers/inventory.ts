
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

    public render(renderContext:CanvasRenderingContext2D, canvas : HTMLCanvasElement) : void {
    

    }

    public processClick(isLeftClick: boolean, isRightClick: boolean, x:number, y: number) : void {

    }

    public isExaming() : boolean {
        return this._isExamining;
    }

    public dropSelected() : void {
        this._slots[this._selectedIdx] = null;
        this._selectedIdx = -1;
    }

    public getSelectedItem() : Item {
        if (this._selectedIdx == -1) {
            return null;
        } else {
            return this._slots[this._selectedIdx];
        }
    }

    public isSelectedItem(itemName: string) : boolean {

        if (this.getSelectedItem() != null) {
            if (this.getSelectedItem().title == itemName) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    public addToInventory(itemToAdd:Item): void {

        var idx = 0;

        this._slots.forEach( function (item) {
            if (item == null) {
                this._slots[idx] = itemToAdd;
                return;
            }

            idx++;
        });


    }
}