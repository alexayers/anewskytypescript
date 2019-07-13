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

    this.addDoor(new DoorBuilder(0, 0, 63, 350)
      .withDestination('room15')
      .withWalkSound('walk_sand.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(315, 0, 350, 350)
      .withDestination('room17')
      .withWalkSound('walk_sand.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(141, 164, 204, 206)
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