import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";
import {AudioManager} from "../managers/audiomanager";
import {ItemManager} from "../managers/itemmanager";
import { Inventory} from "../containers/inventory";

export class Room32 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room32/room32_1b.png');


        this.addForegroundImage('room32/room32_1f.png');

        this.addDoor(new DoorBuilder(0, 0, 41, 240)
            .withDestination('room24')
            .withWalkSound('walk_computer.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(270, 0, 350, 230)
            .withDestination('room24')
            .withWalkSound('walk_computer.ogg')
            .build()
        );

        this.addItem(new ItemBuilder(249, 247, 320, 284)
            .clickable()
            .withTitle('release_storage')
            .withCallBack(() => {
                this.clearBackground();
                this.addBackgroundImage('room32/room32_1bb.png');
      ItemManager.getInstance().getItem('empty_storage')
                    .clickable();

            })
            .build()
        );

        this.addItem(new ItemBuilder(72, 188, 115, 246)
            .withTitle('empty_storage')
            .withCallBack(() => {
                this.clearForeground();
      let storageDevice = new ItemBuilder(null, null, null, null)
                    .withImage('storage.png')
                    .withTitle('storage_device')
                    .withValue('empty')
                    .build();

      Inventory.getInstance().addToInventory(storageDevice);
      AudioManager.getInstance().play('good_code.ogg');

            })
            .build()
        );

        this.addAmbience('cave.ogg');
    }


}