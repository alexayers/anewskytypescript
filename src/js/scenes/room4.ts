import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { ItemManager} from "../managers/itemmanager";

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
    
        this.addDoor(new DoorBuilder(0,274,41,800)
                    .withDestination('room5')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
        this.addDoor(new DoorBuilder(369,273,399,800)
                    .withDestination('room6')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
        this.addDoor(new DoorBuilder(91,389,186,581)
                    .withDestination('room1')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
    
        this.addItem(new ItemBuilder(100,321,137,352)
                    .clickable()
                    .withClickSound('pickup.ogg')
                    .withTitle('floor_keycard')
                    .withCallBack(() => {
          this.clearForeground();
          this.addForegroundImage('room4/room4_1fb.png');
          this.addForegroundImage('room4/room4_2fb.png');
          this.addForegroundImage('room4/room4_3fb.png');
    
    
          let keycard = new ItemBuilder(null, null, null, null)
                         .withImage('keycard.png')
                         .withTitle('keycard')
                         .build();

          Inventory.getInstance().addToInventory(keycard);
          ItemManager.getInstance().getItem('floor_keycard')
              .makeUnclickable();
    
        })
        .build()
        );
    
        this.addAmbience('wind.ogg');
    }


}