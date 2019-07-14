import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import { Event} from "../event/event";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";

export class Room25 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room25/room25_1b.png');
    this.addBackgroundImage('room25/room25_2b.png');
    this.addBackgroundImage('room25/room25_3b.png');
    this.addBackgroundImage('room25/room25_4b.png');

    this.addDoor(new DoorBuilder(0, 0, 47, 253)
      .withDestination('room19')
      .withWalkSound('walk_building.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(291, 0, 350, 249)
      .withDestination('room19')
      .withWalkSound('walk_building.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(53, 219, 106, 252)
      .clickable()
      .withCallBack(() => {
        if (Inventory.getInstance().isSelectedItem('storage_device')) {
          this.clearBackground();
          this.addBackgroundImage('room25/room25_1bb.png');
          this.addBackgroundImage('room25/room25_2bb.png');
          this.addBackgroundImage('room25/room25_3bb.png');
          this.addBackgroundImage('room25/room25_4bb.png');
    
          this.addMiddlegroundImage('room25/room25_1m.png');
    
            let mapPadEnter = ItemManager.getInstance().getItem('mapPadEnter');
    
            if (mapPadEnter.value == 'ready') {
              this.addForegroundImage('room25/room25_1f_map.png');
            } else {
              this.addForegroundImage('room25/room25_1f.png');
            }
    
            Inventory.getInstance().dropSelected();
        }
      })
      .build()
    );


    this.addItem(new ItemBuilder(240, 271, 304, 306)
      .clickable()
      .withTitle('mapload_enter')
      .withCallBack(() => {
        let mapPadEnter = ItemManager.getInstance().getItem('mapPadEnter');
    
          if (mapPadEnter.value == 'ready') {
    
            let storageDevice = new ItemBuilder(null, null, null, null)
          .withValue('gps_loaded')
          .withTitle('gpsDevice')
          .withImage('storage.png')
    .build();
    
          this.clearMiddleground();
          this.clearForeground();
          this.addForegroundImage('room25/room25_1f_storage.png');
            ItemManager.getInstance().getItem('mapload_enter')
            .makeUnclickable();
         
    
            Inventory.getInstance().addToInventory(storageDevice);
            AudioManager.getInstance().play('good_code.ogg');
          } else {
            AudioManager.getInstance().play('bad_code.ogg');
          }

      })
      .build()
    );

    this.addAmbience('maproom.ogg');
  }

  public handleEvent(event: Event): void {
      this.addForegroundImage('room25/room25_1f_map.png');
  }

}