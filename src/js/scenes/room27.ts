import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room27 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room27/room27_1b.png');

        this.addDoor(new DoorBuilder(0, 0, 350, 145)
            .withDestination('room2')
            .withWalkSound('walk_building.ogg')
            .build()
        );
        this.addDoor(new DoorBuilder(0, 237, 350, 350)
            .withDestination('room2')
            .withWalkSound('walk_building.ogg')
            .build()
        );

        this.addItem(new ItemBuilder(66, 180, 140, 215)
            .withTitle('bed_photo')
            .clickable()
            .withClickSound('pickup.ogg')
            .withCallBack( {
                clearBackground
          addBackgroundImage('room27/room27_1bb.png')
    
          _photo = Item.new(nil, nil, nil, nil)
                    .filename('photo.png')
                    .title('photo')
    
          Inventory.instance.addToInventory(_photo)
          ItemManager.instance.getItem('bed_photo')
                    .makeUnclickable
            });

        this.addAmbience('bad_light.ogg');
    }


}