import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room24 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room24/room24_1b.png');
        this.addDoor(new DoorBuilder(315, 0, 350, 350)
            .withDestination('room15')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addAmbience('cave.ogg');
    }


}