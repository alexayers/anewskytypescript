import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room7 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room7/room7_1b.png');
        this.addBackgroundImage('room7/room7_2b.png');
        this.addBackgroundImage('room7/room7_3b.png');

        this.addMiddlegroundImage('room7/room7_1m.png');

        this.addDoor(new DoorBuilder(0, 0, 63, 350)
                .withDestination('room6')
                .withWalkSound('walk_sand.ogg')
                .build()
    );

    this.addDoor(new DoorBuilder(281, 0, 350, 350)
                .withDestination('room8')
                .withWalkSound('walk_sand.ogg')
                .build()
    );

    this.addDoor(new DoorBuilder(132, 187, 201, 243)
                .withDestination('room20')
                .withWalkSound('walk_ladder.ogg')
                .build());

                this.addAmbience('wind.ogg');
    };


}