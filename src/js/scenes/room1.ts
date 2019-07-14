
import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { ItemManager} from "../managers/itemmanager";
import { AudioManager} from "../managers/audiomanager";

import {EventBus} from "../event/eventbus";
import {Event} from "../event/event";

export class Room1 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage("room1/room1_1b.png");
        this.addForegroundImage('room1/room1_1f.png');
        this.addForegroundImage('room1/room1_2f.png');
        this.addForegroundImage('room1/room1_3f.png');

        this.addDoor(
            new DoorBuilder(1,274,41,800)
                .withDestination("room2")
                .withWalkSound("walk_building")
                .build()
        );

        this.addDoor(
            new DoorBuilder(91, 387 , 187 , 582)
            .withDestination('room4')
            .withWalkSound('walk_building')
            .lock()
            .withTitle('broken_door')
            .build()
        );

        this.addItem(
            new ItemBuilder(128,334,155,355)
            .withRenderOffsetX(400)
            .withRenderOffsetY(600)
            .withTitle('key')
            .withImage('key.png')
            .grabble()
            .withClickSound('pickup_keys.ogg')
            .viewable()
            .build()
        );

        this.addItem(
            new ItemBuilder(189,469,212,500)
            .withTitle('broken_cardreader')
            .clickable()
            .withValue('broken')
            .withCallBack(() =>  {
                if (Inventory.getInstance().isSelectedItem('hammer') &&
                    ItemManager.getInstance().getItem('broken_cardreader').value == 'broken') {
                    ItemManager.getInstance().getItem('broken_cardreader').value = 'fixed';
                    Inventory.getInstance().dropSelected();
                    this.clearBackground();
                    this.addBackgroundImage('room1/room1_1bb.png');
                    EventBus.getInstance().publish(new Event('broken_door', 'unlock'));
                    AudioManager.getInstance().play('break_door.ogg');
                } else {
                    AudioManager.getInstance().play('bad_code.ogg');
                }
            })
            .build()
        );

    }


}