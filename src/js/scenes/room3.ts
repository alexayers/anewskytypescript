import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room3 extends Scene {

    constructor() {
        super();
        this.addBackgroundImage('room3/room3_1b.png');
        this.addAmbience('bad_light.ogg');

        this.addDoor(new DoorBuilder(276,273,399,539)
            .withDestination('room2')
            .withWalkSound('walk_building.ogg')
            .withClickSound('unlock_door.ogg')
            .build());

        this.addDoor(new DoorBuilder(178,587,273,648)
            .withDestination('room31')
            .withWalkSound('walk_building.ogg')
            .withClickSound('open_toolbox.ogg')
            .build());
    }


}