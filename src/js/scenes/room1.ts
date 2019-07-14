
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
            new DoorBuilder(0, 0, 42, 348)
                .withDestination("room2")
                .withWalkSound("walk_building")
                .build()
        );

        this.addDoor(
            new DoorBuilder(77, 142, 161, 269)
            .withDestination('room4')
            .withWalkSound('walk_building')
            .lock()
            .withTitle('broken_door')
            .build()
        );

        this.addItem(
            new ItemBuilder(116, 280, 148, 312)
            .withTitle('key')
            .withImage('key.png')
            .grabble()
            .withClickSound('pickup_keys.ogg')
            .viewable()
            .build()
        );

        this.addItem(
            new ItemBuilder(167, 150, 185, 172)
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