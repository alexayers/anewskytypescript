import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room30 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage("room1/room1_1b.png");
        this.addForegroundImage('room1/room1_1f.png');
        this.addForegroundImage('room1/room1_2f.png');
        this.addForegroundImage('room1/room1_3f.png');

        this.addDoor(
            new DoorBuilder(0, 0, 42, 348)
                .withDestination("room2")
                .withWalkSound("walk_building")
                .build()
        );

        this.addDoor(
            new DoorBuilder(77, 142, 161, 269)
            .withDestination('room4')
            .withWalkSound('walk_building')
            .lock()
            .withTitle('broken_door')
            .build()
        );

        this.addItem(
            new ItemBuilder(116, 280, 148, 312)
            .withTitle('key')
            .withImage('key.png')
            .grabble()
            .withClickSound('pickup_keys.ogg')
            .viewable()
            .build()
        );
    }


}