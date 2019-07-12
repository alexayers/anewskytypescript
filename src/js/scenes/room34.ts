import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room34 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room34/ending_3.png');
        this.addDoor(new DoorBuilder(77, 142, 161, 269)
            .withDestination('room21')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addAmbience('waves.ogg');
    }


}