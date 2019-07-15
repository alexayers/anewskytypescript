import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";
import { Event} from "../event/event";

export class Room12 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room12/room12_1b.png');
        this.addBackgroundImage('room12/room12_2b.png');
        this.addBackgroundImage('room12/room12_3b.png');
        this.addBackgroundImage('room12/room12_4b.png');

        this.addDoor(new DoorBuilder(0,274,41,800)
            .withDestination('room20')
            .withWalkSound('walk_sand.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(369,273,399,5390)
            .withDestination('room13')
            .withWalkSound('walk_sand.ogg')
            .build());

        this.addDoor(new DoorBuilder(283,507,316,601)
            .withDestination('room29')
            .withWalkSound('walk_sand.ogg')
            .lock()
            .withTitle('energy_door')
            .build()
        );

        this.addDoor(new DoorBuilder(104,438,248,508)
            .withDestination('room23')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addAmbience('waves.ogg');
    }

    public handleEvent(event: Event): void {
        this.clearBackground();
        this.addBackgroundImage('room12/room12_1bb.png');
        this.addBackgroundImage('room12/room12_2bb.png');
        this.addBackgroundImage('room12/room12_3bb.png');
        this.addBackgroundImage('room12/room12_4bb.png');
    }

}