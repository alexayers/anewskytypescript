import { Scene } from "../containers/scene";
import { EventBus, EventHandler } from "../event/eventbus";
import {Event} from "../event/event";

import { Begin } from "../scenes/begin";
import { Room1 } from "../scenes/room1";
import { Room2 } from "../scenes/room2";
import { Room3 } from "../scenes/room3";
import { Room4 } from "../scenes/room4";
import { Room5 } from "../scenes/room5";
import { Room6 } from "../scenes/room6";
import { Room7 } from "../scenes/room7";
import { Room8 } from "../scenes/room8";
import { Room9 } from "../scenes/room9";
import { Room10 } from "../scenes/room10";
import { Room12 } from "../scenes/room12";
import { Room13 } from "../scenes/room14";
import { Room14 } from "../scenes/room14";
import { Room15 } from "../scenes/room15";
import { Room16 } from "../scenes/room16";
import { Room17 } from "../scenes/room17";
import { Room18 } from "../scenes/room18";
import { Room19} from "../scenes/room19";
import { Room20 } from "../scenes/room20";
import { Room21 } from "../scenes/room21";
import { Room23 } from "../scenes/room23";
import { Room24 } from "../scenes/room24";
import { Room25 } from "../scenes/room25";
import { Room26 } from "../scenes/room26";
import { Room27 } from "../scenes/room27";
import { Room28 } from "../scenes/room28";
import { Room29 } from "../scenes/room29";
import { Room30 } from "../scenes/room30";
import { Room31 } from "../scenes/room31";
import { Room32 } from "../scenes/room32";
import { Room33 } from "../scenes/room33";
import { Room34 } from "../scenes/room34";



export class SceneManager implements EventHandler {

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

        this.registerScene("room1", new Room1());
        this.registerScene("room2", new Room2());
        this.registerScene("room3", new Room3());
        this.registerScene("room4", new Room4());
        this.registerScene("room5", new Room5());
        this.registerScene("room6", new Room6());
        this.registerScene("room7", new Room7());
        this.registerScene("room8", new Room8());
        this.registerScene("room9", new Room9());
        this.registerScene("room10", new Room10());
        this.registerScene("room12", new Room12());
        this.registerScene("room13", new Room13());
        this.registerScene("room14", new Room14());
        this.registerScene("room15", new Room15());
        this.registerScene("room16", new Room16());
        this.registerScene("room17", new Room17());
        this.registerScene("room18", new Room18());
        this.registerScene("room19", new Room19());
        this.registerScene("room20", new Room20());
        this.registerScene("room21", new Room21());
        this.registerScene("room23", new Room23());
        this.registerScene("room24", new Room24());
        this.registerScene("room25", new Room25());
        this.registerScene("room26", new Room26());
        this.registerScene("room27", new Room27());
        this.registerScene("room28", new Room28());
        this.registerScene("room29", new Room29());
        this.registerScene("room30", new Room30());
        this.registerScene("room31", new Room31());
        this.registerScene("room32", new Room32());
        this.registerScene("room33", new Room33());
        this.registerScene("room34", new Room34());


        this._currentScene = "begin";

    }

    private registerScene(sceneName: string, scene : Scene) : void {
        this._scenes.set(sceneName, scene);
        EventBus.getInstance().register(sceneName, scene);
    }

    public processClick(x: number, y:number): void {
        this._scenes.get(this._currentScene).processClick(x,y);
    }

    public render(renderContext:CanvasRenderingContext2D, canvas:HTMLCanvasElement) : void {
        this._scenes.get(this._currentScene).render(renderContext, canvas);
    }

    public handleEvent(event: Event): void {
        // Stub
    }
}