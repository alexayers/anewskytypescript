import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";
import { Inventory} from "../containers/inventory";
import { ItemManager} from "../managers/itemmanager";

export class Room18 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room18/room18_1b.png');

        this.addMiddlegroundImage('room18/room18_1m.png');
        this.addMiddlegroundImage('room18/room18_2m.png');
        this.addMiddlegroundImage('room18/room18_3m.png');
        this.addMiddlegroundImage('room18/room18_4m.png');

        this.addForegroundImage('room18/room18_1f.png');

        this.addDoor(new DoorBuilder(286, 0, 350, 350)
            .withDestination('room19')
            .withWalkSound('walk_building.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(131, 142, 248, 267)
            .withDestination('room5')
            .withWalkSound('slide_door.ogg')
            .build()
        );


        this.addItem(new ItemBuilder(90, 183, 118, 269)
            .clickable()
            .withTitle('room_shovel')
            .withClickSound('pickup.ogg')
            .withCallBack (() => {
                this.clearForeground
      this.addForegroundImage('room18/nothing.png')
      let shovel = new ItemBuilder(null, null, null, null)
                    .withImage('shovel.png')
                    .withTitle('shovel')
                    .build();

      Inventory.getInstance().addToInventory(shovel)
      ItemManager.getInstance().getItem('room_shovel')
                    .makeUnclickable();

            }
        )
        .build()
        );

        this.addAmbience('maproom.ogg');
    }


}