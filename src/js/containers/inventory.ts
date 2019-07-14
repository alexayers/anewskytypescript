
import { Item } from "../clickable/item";

export class Inventory {
    private static _instance: Inventory;
    private _slots: Array<Item>;
    private _isExamining: boolean;
    private _selectedIdx: number;
    private _xOffset: number;
    private _yOffset: number;
    private _highlight: HTMLImageElement;


    private constructor() {
        
    }

    public static getInstance() {
        if (!Inventory._instance) {
            Inventory._instance = new Inventory();
            Inventory._instance.init();
        }

        return Inventory._instance;
    }

    private init() : void {
        this._isExamining = false;
        this._selectedIdx = -1;
        this._xOffset = 30;
        this._yOffset = 360;

        this._slots = new Array();

            for (let i = 0; i < 6; i++) {
                this._slots[i] = null;
            }

        this._highlight = new Image();
        this._highlight.src = "assets/images/objects/highlight.png";
    }

    public render(renderContext: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        let idx = 0;
        let offset = 10;

        this._slots.forEach((item) => {

            if (item != null) {
                renderContext.drawImage(item.image, offset, 755,256,96);

                if (idx == this._selectedIdx) {
                    renderContext.drawImage(this._highlight, offset, 755,256,96);
                }

            }

            idx++;
            offset += 260;

        });

    }

    public processClick(isLeftClick: boolean, isRightClick: boolean, x: number, y: number): void {
        let idx = 0;
        let offset = 10;

        this._slots.forEach((item) => {

            if (item != null) {
                if (x >= offset &&
                    x <= offset + 260 &&
                    y >= 200 &&
                    y <= 268) {

                    if (isLeftClick) {
                        this._isExamining = false;
                        this._selectedIdx = idx;
                    } else if (isRightClick) {
                        this._selectedIdx = idx;

                        if (this._isExamining) {
                            this._isExamining = false;
                        } else {
                            this._isExamining = true;
                        }
                    }
                }
            }

            idx++;
            offset += 260;

        });
    }

    public isExaming(): boolean {
        return this._isExamining;
    }

    public dropSelected(): void {
        this._slots[this._selectedIdx] = null;
        this._selectedIdx = -1;
    }

    public getSelectedItem(): Item {
        if (this._selectedIdx == -1) {
            return null;
        } else {
            return this._slots[this._selectedIdx];
        }
    }

    public isSelectedItem(itemName: string): boolean {

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

    public addToInventory(itemToAdd: Item): void {

        var idx = 0;

        this._slots.forEach((item) => {
            if (item == null) {
                console.log("Placed item into inventory ->" + itemToAdd.title);
                this._slots[idx] = itemToAdd;
                return;
            }
            
            idx++;
        });

        

    }
}