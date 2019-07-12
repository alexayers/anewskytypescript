import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room4 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room4/room4_1b.png');
        this.addBackgroundImage('room4/room4_2b.png');
        this.addBackgroundImage('room4/room4_3b.png');
    
        this.addMiddlegroundImage('room4/room4_1m.png');
        this.addMiddlegroundImage('room4/room4_2m.png');
        this.addMiddlegroundImage('room4/room4_3m.png');
    
        this.addForegroundImage('room4/room4_1f.png');
        this.addForegroundImage('room4/room4_2f.png');
        this.addForegroundImage('room4/room4_3f.png');
    
        this.addDoor(new DoorBuilder(0, 0, 44, 350)
                    .withDestination('room5')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
        this.addDoor(new DoorBuilder(289, 0, 350, 350)
                    .withDestination('room6')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
        this.addDoor(new DoorBuilder(77, 140, 157, 265)
                    .withDestination('room1')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
    
        this.addItem(new ItemBuilder(87, 295, 120, 317)
                    .clickable()
                    .withClickSound('pickup.ogg')
                    .withTitle('floor_keycard')
                    .withCallBack( {
          clearForeground
          this.addForegroundImage('room4/room4_1fb.png')
          this.addForegroundImage('room4/room4_2fb.png')
          this.addForegroundImage('room4/room4_3fb.png')
    
    
          _keycard = Item.new(nil, nil, nil, nil)
                         .filename('keycard.png')
                         .title('keycard')
          Inventory.instance.addToInventory(_keycard)
          ItemManager.instance.getItem('floor_keycard')
              .makeUnclickable
    
        });
    
        this.addAmbience('wind.ogg');
    }


}