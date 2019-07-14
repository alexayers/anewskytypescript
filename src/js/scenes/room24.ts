import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";
import { Event} from "../event/event";

export class Room24 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room24/room24_1b.png');
        this.addDoor(new DoorBuilder(369,273,399,800)
            .withDestination('room15')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addAmbience('cave.ogg');
    }

    public handleEvent(event: Event): void {
        this.clearBackground();
        this.addBackgroundImage('room24/room24_1bb.png');

        this.addDoor(new DoorBuilder(134, 89, 234, 168)
                .withDestination('room32')
                .withWalkSound('walk_computer.ogg')
                .build()
        );
    

    }

}