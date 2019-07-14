import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room2 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room2/room2_1b.png')

        this.addAmbience('bad_light.ogg')

        this.addDoor(new DoorBuilder(276,273,399,539)
                .withDestination('room1')
                .withWalkSound('walk_building.ogg')
                .build()
    )

    this.addDoor(new DoorBuilder(1,274,41,800)
                .withDestination('room3')
                .withWalkSound('walk_building.ogg')
                .requiresKey('key')
                .lock()
                .withClickSound('key_locked.ogg')
                .build()
    )
    
    this.addDoor(new DoorBuilder(154, 90, 315, 136)
                .withDestination('room27')
                .withWalkSound('walk_building.ogg')
                .build()
                )
  
    }


}