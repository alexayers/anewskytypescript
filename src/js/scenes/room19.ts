import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room19 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room19/room19_1b.png');
        this.addBackgroundImage('room19/room19_2b.png');
        this.addBackgroundImage('room19/room19_3b.png');


        this.addMiddlegroundImage('room19/room19_1m.png');
        this.addMiddlegroundImage('room19/room19_2m.png');
        this.addMiddlegroundImage('room19/room19_3m.png');
        this.addMiddlegroundImage('room19/room19_4m.png');
        this.addMiddlegroundImage('room19/room19_5m.png');
        this.addMiddlegroundImage('room19/room19_6m.png');

        this.addDoor(new DoorBuilder(0, 0, 46, 350)
            .withDestination('room18')
            .withWalkSound('walk_building.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(109, 154, 163, 207)
            .withDestination('room25')
            .withWalkSound('walk_computer.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(185, 221, 254, 257)
            .withDestination('room30')
            .withWalkSound('walk_computer.ogg')
            .build()
        );

        this.addAmbience('maproom.ogg');
    }


}