import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room13 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room13/room13_1b.png');

        this.addDoor(new DoorBuilder(0,274,41,800)
            .withDestination('room12')
            .withWalkSound('walk_sand.ogg')
            .build());
        this.addDoor(new DoorBuilder(369,273,399,800)
            .withDestination('room14')
            .withWalkSound('walk_sand.ogg')
            .build());

        this.addDoor(new DoorBuilder(109,409,298,659)
            .withDestination('room15')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addAmbience('waves.ogg');
    }


}