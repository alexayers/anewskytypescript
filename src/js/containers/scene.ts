
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

    public clearBackground(): void {

    }

    public clearMiddleground(): void {

    }

    public clearForeground(): void {

    }



}

