import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { ItemManager} from "../managers/itemmanager";

export class Room10 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room10/room10_1b.png');
        this.addBackgroundImage('room10/room10_2b.png');
        this.addBackgroundImage('room10/room10_3b.png');

        this.addMiddlegroundImage('room10/room10_1m.png');
        this.addMiddlegroundImage('room10/room10_2m.png');
        this.addMiddlegroundImage('room10/room10_3m.png');


        this.addForegroundImage('room10/room10_1f.png');
        this.addForegroundImage('room10/room10_2f.png');
        this.addForegroundImage('room10/room10_3f.png');
        this.addForegroundImage('room10/room10_4f.png');

        this.addDoor(new DoorBuilder(0,274,41,800)
            .withDestination('room9')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addItem(new ItemBuilder(250,398,323,716)
            .clickable()
            .withTitle('parachute')
            .withClickSound('sail.ogg')
            .withCallBack(() => {
                this.clearMiddleground();
                this.addMiddlegroundImage('room10/room10_no_chute_m.png')
                let sail = new ItemBuilder(null, null, null, null)
                            .withImage('parachute.png')
                            .withTitle('parachute')
                            .build();

                Inventory.getInstance().addToInventory(sail);
                ItemManager.getInstance().getItem('parachute').makeUnclickable();

            }
        )
        .build()
        );


        this.addAmbience('wind.ogg');
    }


}