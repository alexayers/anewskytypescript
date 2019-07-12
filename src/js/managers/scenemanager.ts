import { Scene } from "../containers/scene";
import { EventBus } from "../event/eventbus";

import { Begin } from "../scenes/begin";

export class SceneManager {

    private static _instance: SceneManager;
    private _scenes: Map<string, Scene>;
    private _currentScene : string;


    private constructor() { }

    public static getInstance() {
        if (!SceneManager._instance) {
            SceneManager._instance = new SceneManager();
            SceneManager._instance.init();
        }

        return SceneManager._instance;
    }

    private init() : void {
        this._scenes = new Map();

        this.registerScene("begin", new Begin());

        this._currentScene = "begin";

    }

    private registerScene(sceneName: string, scene : Scene) : void {
        this._scenes.set(sceneName, scene);
        EventBus.getInstance().register(sceneName, scene);
    }

    public render(renderContext:CanvasRenderingContext2D, canvas:HTMLCanvasElement) : void {
        this._scenes.get(this._currentScene).render(renderContext, canvas);
    }

}