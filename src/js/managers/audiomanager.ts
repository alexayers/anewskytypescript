export class AudioManager {
    private static _instance: AudioManager;
    private _sounds:Map<string,string>;

    private constructor() {}

    public static getInstance() {
        if (!AudioManager._instance) {
            AudioManager._instance = new AudioManager();
            AudioManager._instance.init();
        }

        return AudioManager._instance;
    }

    private init() : void {
        AudioManager._instance._sounds = new Map();
    }

    private loadAudio(filename: string) : void {

    }

    public play(filename: string) : void {

    }

    public playLooped(filename:string): void {

    }

    public stop(filename: string): void {

    }
}

