import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { ItemManager} from "../managers/itemmanager";

export class Room31 extends Scene {

    constructor() {
        super();

        this.addBackgroundImage('room31/room31_1b.png');


        this.addDoor(new DoorBuilder(0, 279, 400, 371)
                    .withDestination('room3')
                    .withWalkSound('open_toolbox.ogg')
                    .build()
        );
        this.addDoor(new DoorBuilder(0,707,400,800)
                    .withDestination('room3')
                    .withWalkSound('open_toolbox.ogg')
                    .build()
        );
    
        this.addAmbience('bad_light.ogg');
    
        this.addItem(new ItemBuilder(148,477,335,568)
                    .clickable()
                    .withClickSound('pickup.ogg')
                    .withTitle('toolbox')
                    .withCallBack(() => {
                        this.clearBackground();
                        this.addBackgroundImage('room31/room31_1bb.png')
                        let hammer = new ItemBuilder(null, null, null, null)
                                        .withImage('hammer.png')
                                        .withTitle('hammer')
                                        .build();

                        Inventory.getInstance().addToInventory(hammer);
                        ItemManager.getInstance().getItem('toolbox').makeUnclickable();
                    })
        .build()
        );
    }


}