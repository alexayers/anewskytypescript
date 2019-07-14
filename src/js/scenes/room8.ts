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

        this.addDoor(new DoorBuilder(0,274,41,800)
            .withDestination('room7')
            .withWalkSound('walk_sand.ogg')
            .build());
        this.addDoor(new DoorBuilder(369,273,399,800)
            .withDestination('room9')
            .withWalkSound('walk_sand.ogg')
            .build());

        this.addAmbience('wind.ogg');
    }


}