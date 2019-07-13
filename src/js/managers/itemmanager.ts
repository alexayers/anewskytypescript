
import {Item} from "../clickable/item";

export class ItemManager {
    private static _instance : ItemManager;
    private _items:Map<string,Item>;

    private constructor() {}

    public static getInstance() {
        if (!ItemManager._instance) {
            ItemManager._instance = new ItemManager();
            ItemManager._instance.init();
        }

        return ItemManager._instance;
    }

    private init(): void {
        this._items = new Map();
    }

    public register(item:Item): void {
        this._items.set(item.title, item);
    }

    public getItem(title:string): Item {
        return this._items.get(title);
    }

   
 }