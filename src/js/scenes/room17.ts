import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room17 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room17/room17_1b.png');
    this.addMiddlegroundImage('room17/room17_1m.png');
    this.addMiddlegroundImage('room17/room17_2m.png');
    this.addMiddlegroundImage('room17/room17_3m.png');
    this.addForegroundImage('room17/room17_1f.png');

    this.addDoor(new DoorBuilder(0, 0, 63, 350)
      .withDestination('room16')
      .withWalkSound('walk_sand.ogg')
      .build()
    );


    this.addItem(new ItemBuilder(98, 78, 251, 175)
      .withTitle('glass_compartment')
      .clickable()
      .withCallBack( {
        if ItemManager.instance.getItem('generator').getValue == 'powered'
            clearForeground
            clearMiddleground
    
            _pinkCrystal = Item.new(nil, nil, nil, nil)
          .filename('pink_crystal.png')
          .title('pink_crystal')
            Inventory.instance.addToInventory(_pinkCrystal)
            ItemManager.instance.getItem('glass_compartment').makeUnclickable
            AudioManager.instance.play('open_compartment.ogg')
          else
            AudioManager.instance.play('touch_glass.ogg')
          end


      });

    this.addAmbience('cave.ogg');
  }


}