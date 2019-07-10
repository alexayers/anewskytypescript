
import {Event} from "./event";

export class EventBus {

    private static _instance : EventBus;

    private constructor() {}

    public static getInstance() {
        if (!EventBus._instance) {
            EventBus._instance = new EventBus();
        }

        return EventBus._instance;
    }

    public listener() : void {

    }

    public publish(event: Event) {

    }
}