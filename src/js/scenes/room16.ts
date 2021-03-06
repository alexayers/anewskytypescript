import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import {Event} from "../event/event";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";

export class Room16 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room16/room16_1b.png');


    this.addMiddlegroundImage('room16/room16_1m.png');
    this.addMiddlegroundImage('room16/room16_2m.png');
    this.addMiddlegroundImage('room16/room16_3m.png');
    this.addMiddlegroundImage('room16/room16_4m.png');
    this.addMiddlegroundImage('room16/room16_5m.png');
    this.addMiddlegroundImage('room16/room16_6m.png');

    this.addForegroundImage('room16/room16_1f.png');

    this.addDoor(new DoorBuilder(0,274,41,800)
      .withDestination('room15')
      .withWalkSound('walk_sand.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(369,273,399,800)
      .withDestination('room17')
      .withWalkSound('walk_sand.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(165,487,236,549)
      .withTitle('generator')
      .clickable()
      .withValue('not_powered')
      .withCallBack(() => {
        if (Inventory.getInstance().isSelectedItem('power_cell')) {
            ItemManager.getInstance().getItem('generator').value  = 'powered';
            Inventory.getInstance().dropSelected();
            ItemManager.getInstance().getItem('generator').makeUnclickable();
    
            this.clearForeground();
            this.addForegroundImage('room16/room16_1fb.png');
    
            EventBus.getInstance().publish(new Event('room24', 'power'));
            EventBus.getInstance().publish(new Event('room17', 'power'));
    
            EventBus.getInstance().publish(new Event('broken_door', 'unlock'));
    
            AudioManager.getInstance().play('remove_power.ogg');
        } else {
            AudioManager.getInstance().play('empty_supply.ogg');
        }


      }).build());

    this.addAmbience('cave.ogg');
  }


}