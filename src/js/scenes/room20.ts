import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room20 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room20/room20.png');

        this.addDoor(new DoorBuilder(0,274,41,800)
            .withDestination('room21')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addDoor(new DoorBuilder(369,273,399,800)
            .withDestination('room12')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addDoor(new DoorBuilder(154,417,249,798)
            .withDestination('room7')
            .withWalkSound('walk_ladder.ogg')
            .build()
        );


        this.addAmbience('waves.ogg');
    }


}