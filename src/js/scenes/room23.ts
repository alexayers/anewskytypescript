import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room23 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room23/room23_1b.png');

        this.addMiddlegroundImage('room23/room23_1m.png');
        this.addMiddlegroundImage('room23/room23_2m.png');
        this.addMiddlegroundImage('room23/room23_3m.png');
        this.addMiddlegroundImage('room23/room23_4m.png');

        this.addDoor(new DoorBuilder(0, 0, 350, 187)
            .withDestination('room12')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(210, 261, 350, 350)
            .withDestination('room12')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(8, 423, 65, 520)
            .withDestination('room26')
            .withWalkSound('walk_computer.ogg')
            .build()
        );

        this.addAmbience('waves.ogg');
    }


}