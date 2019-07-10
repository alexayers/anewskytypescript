
import {AnimatedFrame} from "./animatedframe";
import {Door} from "../clickable/door";
import {Item} from "../clickable/item";


export class Scene {
    private _background : AnimatedFrame;
    private _middleground : AnimatedFrame;
    private _foreground : AnimatedFrame;
    private _items: Array<Item>;
    private _doors: Array<Door>;
    private _ambientSound: string;
    private _clickCallBack: Function;
    private _renderCallBack: Function;


    public addBackground(filename: string) : void {

    }

    public addMiddleground(filename: string): void {

    }

    public addForeground(filename: string): void {

    }

    public addAmbience(filename: string): void {

    }

    public addClickCallback(func: Function): void {
        this._clickCallBack = func;
    }

    public playAmbience() : void {
        if (this._ambientSound != null) {

        }
    }

    public stopAmbience() : void {

    }

    public addDoor(door : Door) : void {

    }

    public addItem( item : Item): void {

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




}

