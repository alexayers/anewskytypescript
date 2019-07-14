import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import {Event} from "../event/event";
import { AudioManager} from "../managers/audiomanager";

export class Room5 extends Scene {



    constructor() {
        super();
        this.addBackgroundImage('room5/room5_1b.png');
        this.addBackgroundImage('room5/room5_2b.png');
        this.addBackgroundImage('room5/room5_3b.png');
        this.addMiddlegroundImage('room5/room5_1m.png');
        this.addMiddlegroundImage('room5/room5_2m.png');
    
        this.addDoor(new DoorBuilder(179,391,287,599)
                    .withDestination('room18')
                    .withWalkSound('slide_door.ogg')
                    .lock()
                    .withTitle('slide_door')
                    .build()
        );

        this.addDoor(new DoorBuilder(369,273,399,8009)
                    .withDestination('room4')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
    
        this.addItem(new ItemBuilder(302,469,350,518)
                    .withTitle('keyreader')
                    .clickable()
                    .withCallBack(() =>  {
          if (Inventory.getInstance().isSelectedItem('keycard')) {
            Inventory.getInstance().dropSelected();
            this.clearMiddleground();
            this.addMiddlegroundImage('room5/room5_1mb.png');
            this.addMiddlegroundImage('room5/room5_2mb.png');
    
            EventBus.getInstance().publish(new Event('slide_door', 'unlock'));
    
            AudioManager.getInstance().play('slide_door.ogg');
          }
    
    
        })
        .build());
    
    
        this.addAmbience('wind.ogg');
    }


}