export class ItemManager {
    private static _instance : ItemManager;

    private constructor() {}

    public static getInstance() {
        if (!ItemManager._instance) {
            ItemManager._instance = new ItemManager();
        }

        return ItemManager._instance;
    }
}