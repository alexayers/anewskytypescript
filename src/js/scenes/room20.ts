import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room20 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room20/room20.png');

        this.addDoor(new DoorBuilder(0, 0, 63, 350)
            .withDestination('room21')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addDoor(new DoorBuilder(281, 0, 350, 350)
            .withDestination('room12')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addDoor(new DoorBuilder(129, 0, 215, 260)
            .withDestination('room7')
            .withWalkSound('walk_ladder.ogg')
            .build()
        );


        this.addAmbience('waves.ogg');
    }


}