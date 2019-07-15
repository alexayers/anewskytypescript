import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import {Event} from "../event/event";
import { ItemManager} from "../managers/itemmanager";

export class Room9 extends Scene {

    constructor() {
        super();
        this.addBackgroundImage('room9/room9_1b.png');
        this.addBackgroundImage('room9/room9_2b.png');
        this.addBackgroundImage('room9/room9_3b.png');
    
    
        this.addMiddlegroundImage('room9/room9_1m.png');
    
    
        this.addDoor(new DoorBuilder(0,274,41,800)
                    .withDestination('room8')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );

        this.addDoor(new DoorBuilder(369,273,399,800)
                    .withDestination('room10')
                    .withWalkSound('walk_sand.ogg')
                    .build());
    
    
        this.addItem(new ItemBuilder(152,503,206,596)
                    .withTitle('purple_pilar')
                    .clickable()
                    .withClickSound('rocks.ogg')
                    .withValue('')
                    .withCallBack( () => {
                      if (Inventory.getInstance().isSelectedItem('purple_crystal')) {
                        ItemManager.getInstance().getItem('purple_pilar').value = 'fixed';
                        Inventory.getInstance().dropSelected();
                
                        if (ItemManager.getInstance().getItem('pink_pilar').value == 'fixed') {
                          this.clearMiddleground();
                          this.addMiddlegroundImage('room9/room9_1m_all.png')
                          this.addMiddlegroundImage('room9/room9_2m_all.png')
                          this.addMiddlegroundImage('room9/room9_3m_all.png')
                          EventBus.getInstance().publish(new Event('room30', 'updateMap'))
                        } else {
                          this.clearMiddleground();
                          this.addMiddlegroundImage('room9/room9_1m_purple.png')
                        }
                      }
        })
        .build());
    
        this.addItem(new ItemBuilder(228,487,284,696)
                    .withTitle('pink_pilar')
                    .clickable()
                    .withClickSound('rocks.ogg')
                    .withValue('')
                    .withCallBack(() => {
                      if (Inventory.getInstance().isSelectedItem('pink_crystal')) {
                        ItemManager.getInstance().getItem('pink_pilar').value = 'fixed';
                        Inventory.getInstance().dropSelected();
                
                        if (ItemManager.getInstance().getItem('purple_pilar').value == 'fixed') {
                          this.clearMiddleground();
                          this.addMiddlegroundImage('room9/room9_1m_all.png');
                          this.addMiddlegroundImage('room9/room9_2m_all.png');
                          this.addMiddlegroundImage('room9/room9_3m_all.png');
                          EventBus.getInstance().publish(new Event('room30', 'updateMap'));
                        } else {
                          this.clearMiddleground();
                          this.addMiddlegroundImage('room9/room9_1m_pink.png');
                        }
                      }
                   })
                    .build()
        );
    
        this.addAmbience('wind.ogg');
    }


}