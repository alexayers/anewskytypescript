import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

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
            .withCallBack( {
                clearBackground
      addBackgroundImage('room32/room32_1bb.png')
      ItemManager.instance.getItem('empty_storage')
                    .clickable

            });

        this.addItem(new ItemBuilder(72, 188, 115, 246)
            .withTitle('empty_storage')
            .withCallBack( {
                clearForeground
      _storageDevice = Item.new(nil, nil, nil, nil)
                    .filename('storage.png')
                    .title('storage_device')
                    .value('empty')
      Inventory.instance.addToInventory(_storageDevice)
      AudioManager.instance.play('good_code.ogg')

            });

        this.addAmbience('cave.ogg');
    }


}