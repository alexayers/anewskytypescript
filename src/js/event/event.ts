

export class Event {
    private _channel: string;
    private _paylod: string;

    constructor(_channel: string, payload: string) {
        this._channel = _channel;
        this._paylod = payload;
    }

    get channel() {
        return this._channel;
    }

    get payload() {
        return this._paylod;
    }
}