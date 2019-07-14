import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room15 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room15/room15_1b.png');
        this.addBackgroundImage('room15/room15_2b.png');
        this.addBackgroundImage('room15/room15_3b.png');
        this.addBackgroundImage('room15/room15_4b.png');

        this.addForegroundImage('room15/room15_1f.png');


        this.addDoor(new DoorBuilder(0,274,41,800)
            .withDestination('room24')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(369,273,399,800)
            .withDestination('room16')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(97,409,255,659)
            .withDestination('room13')
            .withWalkSound('walk_sand.ogg')
            .build()
        );


        this.addAmbience('cave.ogg');
    }


}