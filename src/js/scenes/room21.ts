import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";

export class Room21 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room21/room21_1b.png');

    this.addMiddlegroundImage('room21/room21_1m.png');
    this.addMiddlegroundImage('room21/room21_2m.png');
    this.addMiddlegroundImage('room21/room21_3m.png');
    this.addMiddlegroundImage('room21/room21_4m.png');

    this.addForegroundImage('room21/room21_1f.png');
    this.addForegroundImage('room21/room21_2f.png');
    this.addForegroundImage('room21/room21_3f.png');
    this.addForegroundImage('room21/room21_2f.png');

    this.addDoor(new DoorBuilder(369,273,399,539)
      .withDestination('room20')
      .withWalkSound('walk_sand.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(176,372,345,800)
      .withDestination('room33')
      .withWalkSound('walk_sand.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(98, 61, 226, 279)
      .clickable()
      .withTitle('sailboat')
      .withCallBack(() => {

        if (Inventory.getInstance().isSelectedItem('parachute')) {
          Inventory.getInstance().dropSelected();
          ItemManager.getInstance().getItem('sailboat').value = 'ready';

          this.clearForeground();
          this.addForegroundImage('room21/room21_1fb.png');
          this.addForegroundImage('room21/room21_2fb.png');
          this.addForegroundImage('room21/room21_3fb.png');
          this.addForegroundImage('room21/room21_2fb.png');
          AudioManager.getInstance().play('sail.ogg');
        }

      }
    ).build()
    );

    this.addAmbience('waves.ogg');
  }


}