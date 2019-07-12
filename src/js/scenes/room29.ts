import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

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
                    .withCallBack( {
          clearMiddleground
          _powercell = Item.new(nil, nil, nil, nil)
                           .filename('power_cell.png')
                           .title('power_cell')
    
          Inventory.instance.addToInventory(_powercell)
          ItemManager.instance.getItem('trunk')
              .makeUnclickable
    
        });
    
        this.addAmbience('spaceship.ogg');


}