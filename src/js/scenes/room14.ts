import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import { AudioManager} from "../managers/audiomanager";

export class Room14 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room14/room14_1b.png');
    this.addMiddlegroundImage('room14/room14_1m.png');


    this.addDoor(new DoorBuilder(0,274,41,800)
      .withDestination('room13')
      .withWalkSound('walk_sand.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(171,337,231,434)
      .withTitle('grave')
      .clickable()
      .withCallBack(() => {
        if (Inventory.getInstance().isSelectedItem('shovel')) {
        Inventory.getInstance().dropSelected();
        this.clearMiddleground();
        this.addMiddlegroundImage('room14/room14_1mb.png');
        AudioManager.getInstance().play('dig.ogg');

        let purpleCrystal = new ItemBuilder(null, null, null, null)
          .withImage('purple_crystal.png')
          .withTitle('purple_crystal')
          .build();
        Inventory.getInstance().addToInventory(purpleCrystal);
        }


      }).build()
    );

    this.addAmbience('waves.ogg');
  }


}