export class AudioManager {
    private static _instance: AudioManager;

    private constructor() {}

    public static getInstance() {
        if (!AudioManager._instance) {
            AudioManager._instance = new AudioManager();
        }

        return AudioManager._instance;
    }
}