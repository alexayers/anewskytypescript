

export class Event {
    private _target: string;
    private _paylod: string;

    constructor(target: string, payload: string) {
        this._target = target;
        this._paylod = payload;
    }

    get target() {
        return this._target;
    }

    get payload() {
        return this._paylod;
    }
}