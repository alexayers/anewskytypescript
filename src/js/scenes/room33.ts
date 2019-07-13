import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import { Event } from "../event/event";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";

export class Room33 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room33/room33_1b.png');
    this.addBackgroundImage('room33/room33_2b.png');
    this.addBackgroundImage('room33/room33_3b.png');

    this.addMiddlegroundImage('room33/room33_1m.png');


    this.addDoor(new DoorBuilder(0, 0, 23, 201)
      .withDestination('room21')
      .withWalkSound('walk_sand.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(322, 0, 350, 35)
      .withDestination('room21')
      .withWalkSound('walk_sand.ogg')
      .build());
    this.addDoor(new DoorBuilder(0, 307, 350, 350)
      .withDestination('room21')
      .withWalkSound('walk_sand.ogg')
      .build()
    );


    this.addItem(new ItemBuilder(41, 239, 84, 302)
      .clickable()
      .withTitle('navStorage')
      .withCallBack(() => {

        if (Inventory.getInstance().isSelectedItem('gpsDevice')) {
            ItemManager.getInstance().getItem('navStorage').value = 'ready';
            Inventory.getInstance().dropSelected();
            this.clearMiddleground();
            this.addMiddlegroundImage('room33/room33_1mb.png');
            AudioManager.getInstance().play('good_code.ogg');
        } else {
            AudioManager.getInstance().play('bad_code.ogg');
        }

      })
      .build()
    );

    this.addItem(new ItemBuilder(234, 22, 290, 257)
      .clickable()
      .withCallBack(() => {
        let navStorage = ItemManager.getInstance().getItem('navStorage');
        let sailBoat = ItemManager.getInstance().getItem('sailboat');
    
          if (navStorage.value == 'ready' &&
            sailBoat.value == 'ready') {
            EventBus.getInstance().publish(new Event('sceneManager', 'room34'));
          }


      })
      .build()
      );


    this.addAmbience('waves.ogg');
  }


}