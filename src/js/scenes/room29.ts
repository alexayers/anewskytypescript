import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { ItemManager} from "../managers/itemmanager";

export class Room29 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room29/room29_1b.png');
        this.addMiddlegroundImage('room29/room29_1m.png');
    
        this.addDoor(new DoorBuilder(0, 0, 337, 121)
                    .withDestination('room12')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
        this.addItem(new ItemBuilder(46, 140, 331, 314)
                    .clickable()
                    .withTitle('trunk')
                    .withClickSound('remove_power.ogg')
                    .withCallBack(() => {
          this.clearMiddleground();
          let powercell = new ItemBuilder(null, null, null, null)
                           .withImage('power_cell.png')
                           .withTitle('power_cell')
                           .build();
    
          Inventory.getInstance().addToInventory(powercell)
          ItemManager.getInstance().getItem('trunk')
              .makeUnclickable();
    
        })
        .build()
        );
    
        this.addAmbience('spaceship.ogg');
    }

}