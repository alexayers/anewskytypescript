import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room31 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room31/room31_1b.png');


        this.addDoor(new DoorBuilder(0, 0, 350, 130)
                    .withDestination('room3')
                    .withWalkSound('open_toolbox.ogg')
                    .build()
        );
        this.addDoor(new DoorBuilder(0, 239, 350, 350)
                    .withDestination('room3')
                    .withWalkSound('open_toolbox.ogg')
                    .build()
        );
    
        this.addAmbience('bad_light.ogg');
    
        this.addItem(new ItemBuilder(128, 164, 294, 230)
                    .clickable()
                    .withClickSound('pickup.ogg')
                    .withTitle('toolbox')
                    .withCallBack( {
          clearBackground
          addBackgroundImage('room31/room31_1bb.png')
          _hammer = Item.new(nil, nil, nil, nil)
                        .filename('hammer.png')
                        .title('hammer')
          Inventory.instance.addToInventory(_hammer)
          ItemManager.instance.getItem('toolbox')
              .makeUnclickable
    
        });
    }


}