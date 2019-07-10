export class SceneManager {

    private static _instance : SceneManager;

    private constructor() {}

    public static getInstance() {
        if (!SceneManager._instance) {
            SceneManager._instance = new SceneManager();
        }

        return SceneManager._instance;
    }
}