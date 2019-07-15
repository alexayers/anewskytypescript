export class AudioManager {
    private static _instance: AudioManager;
    private _sounds:Map<string,HTMLAudioElement>;

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

    public register(filename : string): void {
        let sound = "assets/audio/" + filename;
        let audio = new Audio();
        audio.src = sound;
        this._sounds.set(filename, audio);
    }

    public registerLoop(filename : string): void {
        this.register(filename);
        this._sounds.get(filename).loop = true;
    }

    public play(filename: string) : void {
        if (!this._sounds.has(filename)) {
            let sound = "assets/audio/" + filename;
            let audio = new Audio();
            audio.src = sound;
            this._sounds.set(filename, audio);
        }

        this._sounds.get(filename).play();
    }

    public playLooped(filename:string): void {
        this._sounds.get(filename).play();
    }

    public stop(filename: string): void {
        this._sounds.get(filename).pause();
    }
}

