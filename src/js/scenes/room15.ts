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


        this.addDoor(new DoorBuilder(0, 0, 63, 350)
            .withDestination('room24')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(315, 0, 350, 350)
            .withDestination('room16')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(84, 98, 267, 258)
            .withDestination('room13')
            .withWalkSound('walk_sand.ogg')
            .build()
        );


        this.addAmbience('cave.ogg');
    }


}