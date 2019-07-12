import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room8 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room8/room8_1b.png');
        this.addBackgroundImage('room8/room8_2b.png');
        this.addBackgroundImage('room8/room8_3b.png');

        this.addMiddlegroundImage('room8/room8_1m.png');
        this.addMiddlegroundImage('room8/room8_2m.png');
        this.addMiddlegroundImage('room8/room8_3m.png');
        this.addMiddlegroundImage('room8/room8_4m.png');

        this.addDoor(new DoorBuilder(0, 0, 63, 350)
            .withDestination('room7')
            .withWalkSound('walk_sand.ogg')
            .build())
        this.addDoor(new DoorBuilder(281, 0, 350, 350)
            .withDestination('room9')
            .withWalkSound('walk_sand.ogg')
            .build());

        this.addAmbience('wind.ogg');
    }


}