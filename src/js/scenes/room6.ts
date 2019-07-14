import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room6 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room6/room6_1b.png');
        this.addBackgroundImage('room6/room6_2b.png');
        this.addBackgroundImage('room6/room6_3b.png');

        this.addMiddlegroundImage('room6/room6_1m.png');
        this.addMiddlegroundImage('room6/room6_2m.png');
        this.addMiddlegroundImage('room6/room6_3m.png');
        this.addMiddlegroundImage('room6/room6_4m.png');
        this.addMiddlegroundImage('room6/room6_5m.png');


        this.addDoor(new DoorBuilder(0,274,41,800)
            .withDestination('room4')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addDoor(new DoorBuilder(369,273,399,800)
            .withDestination('room7')
            .withWalkSound('walk_sand.ogg')
            .build());

        this.addAmbience('wind.ogg');
    }


}