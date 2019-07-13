import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room2 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room2/room2_1b.png')

        this.addAmbience('bad_light.ogg')

        this.addDoor(new DoorBuilder(298, 0, 350, 350)
                .withDestination('room1')
                .withWalkSound('walk_building.ogg')
                .build()
    )

    this.addDoor(new DoorBuilder(0, 121, 50, 333)
                .withDestination('room3')
                .withWalkSound('walk_building.ogg')
                .requiresKey('key')
                .withClickSound('key_locked.ogg')
                .build()
    )
    
    this.addDoor(new DoorBuilder(154, 201, 242, 267)
                .withDestination('room27')
                .withWalkSound('walk_building.ogg')
                .build()
                )
  
    }


}