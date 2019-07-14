import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room3 extends Scene {

    constructor() {
        super();
        this.addBackgroundImage('room3/room3_1b.png');
        this.addAmbience('bad_light.ogg');

        this.addDoor(new DoorBuilder(298, 0, 350, 350)
            .withDestination('room2')
            .withWalkSound('walk_building.ogg')
            .withClickSound('unlock_door.ogg')
            .build());

        this.addDoor(new DoorBuilder(158, 238, 235, 272)
            .withDestination('room31')
            .withWalkSound('walk_building.ogg')
            .withClickSound('open_toolbox.ogg')
            .build());
    }


}