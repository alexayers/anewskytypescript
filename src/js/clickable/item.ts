
import { ClickBox } from './clickbox';
import { Inventory } from '../containers/inventory';
import { AudioManager } from '../managers/audiomanager';
import { EventHandler } from "../event/eventbus";
import { Event } from "../event/event";

export class Item extends ClickBox implements EventHandler {
    private _imageExamine: string;
    private _value: string;
    private _canGrab: boolean;
    private _onScreen: boolean;
    private _canClick: boolean;
    private _canExamine: boolean;
    private _callBack: Function;
    private _image: HTMLImageElement;
    private _renderOffsetX : number;
    private _renderOffsetY: number;

    constructor(itemBuilder: ItemBuilder) {
        super(itemBuilder.lx,
            itemBuilder.ly,
            itemBuilder.hx,
            itemBuilder.hy);

        this._title = itemBuilder.title;   
        this._clickSound = itemBuilder.clickSound;
        this._imageExamine = itemBuilder.imageExamine;
        this._value = itemBuilder.value;
        this._canGrab = itemBuilder.canGrab;
        this._onScreen = itemBuilder.onScreen;
        this._canClick = itemBuilder.canClick;
        this._canExamine = itemBuilder.canExamine;
        this._callBack = itemBuilder.callBack;
        this._image = itemBuilder.image;
        this._renderOffsetX = itemBuilder.renderOffsetX;
        this._renderOffsetY = itemBuilder.renderOffsetY;
    }

    public render(): void {

        let canvas = <HTMLCanvasElement>document.getElementById('canvas');
		let ctx = canvas.getContext("2d");
 
        if (this._image != null && this._onScreen) {
            ctx.drawImage(this._image, this._renderOffsetX, this._renderOffsetY, 96, 96);
        }

    }

    public isPointWithItem(x: number, y: number): boolean {

        if (!this._canGrab && !this._canClick) {
            return false;
        }

        if (this.isPointInSquare(x, y)) {
            if (this._clickSound != null) {
                AudioManager.getInstance().play(this.clickSound);
            }

            if (this._canGrab && this._onScreen) {
                this._onScreen = false;
                Inventory.getInstance().addToInventory(this);
                return true;
            } else if (this._canClick) {
                if (this._callBack != null) {
                    this._callBack();
                    return true;
                }
            }
        }

        return false;

    }

    get image(): HTMLImageElement {
        return this._image;
    }
 
    public makeUnclickable() : void {
        this._canClick = false;
    }

    public clickable() : void {
        this._canClick = true;
    }

    get value() : string {
        return this._value;
    }

    get renderOffsetX() : number {
        return this._renderOffsetX;
    }


    get renderOffsetY() : number {
        return this._renderOffsetY;
    }


    set value(value:string)  {
        this._value = value;
    }

    public handleEvent(event: Event): void {
        // stub
    }

}

export class ItemBuilder {
    private _lx: number;
    private _ly: number;
    private _hx: number;
    private _hy: number;
    private _title: string;
    private _clickSound: string;
    private _imageExamine: string;
    private _value: string;
    private _canGrab: boolean;
    private _onScreen: boolean;
    private _canClick: boolean;
    private _canExamine: boolean;
    private _callBack: Function;
    private _image: HTMLImageElement;
    private _renderOffsetX : number;
    private _renderOffsetY: number;


    constructor(lx: number, ly: number, hx: number, hy: number) {
        this._lx = lx;
        this._ly = ly;
        this._hx = hx;
        this._hy = hy;
        this._onScreen = false;
        this._title = null; 
        this._clickSound = null;
        this._imageExamine= null;
        this._value = null;
        this._canGrab= false;
        this._onScreen= false;
        this._canClick= false;
        this._canExamine= false;
        this._callBack = null;
        this._image = null;
        this._renderOffsetX = null;
        this._renderOffsetY = null;
    }

    public withImage(filename: string): ItemBuilder {
        this._image = new Image();
        this._image.src = "assets/images/objects/" + filename;
        return this;
    }

    public withTitle(title: string): ItemBuilder {
        this._title = title;
        return this;
    }

    public withRenderOffsetX(renderOffsetX: number) : ItemBuilder {
        this._renderOffsetX = renderOffsetX;
        return this;
    }

    public withRenderOffsetY(renderOffsetY: number) : ItemBuilder {
        this._renderOffsetY = renderOffsetY;
        return this;
    }
 
    public withClickSound(clickSound: string): ItemBuilder {
        this._clickSound = clickSound;
        return this;
    }

    public withImageExamine(imageExamine: string): ItemBuilder {
        this._imageExamine = imageExamine;
        return this;
    }


    public withValue(value: string): ItemBuilder {
        this._value = value;
        return this;
    }

    public grabble(): ItemBuilder {
        this._canGrab = true;
        return this;
    }

    public viewable(): ItemBuilder {
        this._onScreen = true;
        return this;
    }

    public clickable(): ItemBuilder {
        this._canClick = true;
        return this;
    }

    public examinable(): ItemBuilder {
        this._canExamine = true;
        return this;
    }

    public withCallBack(callBack: Function): ItemBuilder {
        this._callBack = callBack;
        return this;
    }

    public build(): Item {
        return new Item(this);
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

    get title(): string {
        return this._title;
    }
    get clickSound() {
        return this._clickSound;
    }
    get imageExamine(): string {
        return this._imageExamine;
    }

    get image(): HTMLImageElement {
        return this._image;
    }

    get value(): string {
        return this._value;
    }
    get canGrab(): boolean {
        return this._canGrab;
    }

    get onScreen(): boolean {
        return this._onScreen;
    }

    get canClick(): boolean {
        return this._canClick;
    }

    get canExamine(): boolean {
        return this._canExamine;
    }

    get callBack(): Function {
        return this._callBack;
    }

    get renderOffsetX() : number {
        return this._renderOffsetX;
    }

    get renderOffsetY() : number {
        return this._renderOffsetY;
    }

}