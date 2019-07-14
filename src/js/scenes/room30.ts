
import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import {Event} from "../event/event";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";

export class Room30 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room30/room30_1b.png');

        this.addMiddlegroundImage('room30/room30_1m.png');
        this.addMiddlegroundImage('room30/room30_2m.png');
        this.addMiddlegroundImage('room30/room30_3m.png');
        this.addMiddlegroundImage('room30/room30_4m.png');

        this.addDoor(new DoorBuilder(0, 0, 47, 296)
                    .withDestination('room19')
                    .withWalkSound('walk_computer.ogg')
                    .build()          
        );

        this.addDoor(new DoorBuilder(291, 0, 350, 296)
                    .withDestination('room19')
                    .withWalkSound('walk_computer.ogg')
                    .build()          
        );

        this.addItem(new ItemBuilder(null, null, null, null)
                    .withTitle('mapPad')
                    .withValue('0,0')
                    .build()          
        );

        this.addItem(new ItemBuilder(12, 305, 74, 339)
                .withTitle('mapPadEnter')
                .withValue('')
                .clickable()
                .withCallBack(() => {

                    let coords = ItemManager.getInstance().getItem('mapPad').value.split(',');
                    let coordX = Number(coords[0]);
                    let coordY = Number(coords[1]);

                    if (coordX == 4 &&
                        coordY == 3 &&
                        ItemManager.getInstance().getItem('pink_pilar').value == 'fixed' &&
                        ItemManager.getInstance().getItem('purple_pilar').value == 'fixed') {

                            ItemManager.getInstance().getItem('mapPadEnter').value = 'ready';

                            EventBus.getInstance().publish(new Event('room25', 'ready'));
                            this.clearBackground();
                            this.addBackgroundImage('room30/room30_1bd.png');
                            AudioManager.getInstance().play('good_code.ogg');
                        } else {
                            ItemManager.getInstance().getItem('mapPadEnter').value = '';
                            AudioManager.getInstance().play('bad_code.ogg');
                        }
                    })
                    .build()
         );

         this.addAmbience('maproom.ogg');
    }

    public handleEvent(event: Event): void {
        this.clearBackground();
        this.addBackgroundImage('room30/room30_1bb.png');
        this.addBackgroundImage('room30/room30_1bc.png');
    }

}