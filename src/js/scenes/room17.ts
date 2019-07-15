import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";

export class Room17 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room17/room17_1b.png');
    this.addMiddlegroundImage('room17/room17_1m.png');
    this.addMiddlegroundImage('room17/room17_2m.png');
    this.addMiddlegroundImage('room17/room17_3m.png');
    this.addForegroundImage('room17/room17_1f.png');

    this.addDoor(new DoorBuilder(0,274,41,800)
      .withDestination('room16')
      .withWalkSound('walk_sand.ogg')
      .build()
    );


    this.addItem(new ItemBuilder(103,520,297,696)
      .withTitle('glass_compartment')
      .clickable()
      .withCallBack(() => {
        if (ItemManager.getInstance().getItem('generator').value == 'powered') {
          this.clearForeground();
          this.clearMiddleground();
    
            let pinkCrystal = new ItemBuilder(null, null, null, null)
              .withImage('pink_crystal.png')
              .withTitle('pink_crystal')
              .build();
          
            Inventory.getInstance().addToInventory(pinkCrystal);
            ItemManager.getInstance().getItem('glass_compartment').makeUnclickable();
            AudioManager.getInstance().play('open_compartment.ogg');
        } else {
            AudioManager.getInstance().play('touch_glass.ogg');
        }


      })
      .build()
    );

    this.addAmbience('cave.ogg');
  }


}