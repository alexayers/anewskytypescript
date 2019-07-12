import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

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

        this.addDoor(new DoorBuilder(0, 0, 63, 350)
            .withDestination('room9')
            .withWalkSound('walk_sand.ogg')
            .build()
        );

        this.addItem(new ItemBuilder(219, 66, 297, 281)
            .clickable()
            .withTitle('parachute')
            .withClickSound('sail.ogg')
            .withCallBack( {
                clearMiddleground
          addMiddlegroundImage('room10/room10_no_chute_m.png')
          _sail = Item.new(nil, nil, nil, nil)
                    .filename('parachute.png')
                    .title('parachute')
          Inventory.instance.addToInventory(_sail)
          ItemManager.instance.getItem('parachute')
                    .makeUnclickable

            }
        );


        this.addAmbience('wind.ogg');
    }


}