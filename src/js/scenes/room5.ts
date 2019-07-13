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
    
        this.addDoor(new DoorBuilder(154, 131, 247, 267)
                    .withDestination('room18')
                    .withWalkSound('slide_door.ogg')
                    .lock()
                    .withTitle('slide_door')
                    .build()
        );

        this.addDoor(new DoorBuilder(306, 0, 350, 350)
                    .withDestination('room4')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
    
        this.addItem(new ItemBuilder(270, 183, 302, 230)
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