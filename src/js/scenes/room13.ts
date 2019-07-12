import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room13 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room13/room13_1b.png');

        this.addDoor(new DoorBuilder(0, 0, 63, 350)
            .withDestination('room12')
            .withWalkSound('walk_sand.ogg')
            .build());
        this.addDoor(new DoorBuilder(283, 0, 350, 350)
            .withDestination('room14')
            .withWalkSound('walk_sand.ogg')
            .build());

        this.addDoor(new DoorBuilder(114, 88, 265, 257)
            .withDestination('room15')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addAmbience('waves.ogg');
    }


}