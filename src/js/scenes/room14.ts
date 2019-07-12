import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room14 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room14/room14_1b.png');
    this.addMiddlegroundImage('room14/room14_1m.png');


    this.addDoor(new DoorBuilder(0, 0, 63, 350)
      .withDestination('room13')
      .withWalkSound('walk_sand.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(149, 234, 206, 312)
      .withTitle('grave')
      .clickable()
      .withCallBack( {
        if Inventory.instance.isSelectedItem('shovel')
        Inventory.instance.dropSelected
        clearMiddleground
        addMiddlegroundImage('room14/room14_1mb.png')
        AudioManager.instance.play('dig.ogg')

        _purpleCrystal = Item.new(nil, nil, nil, nil)
          .filename('purple_crystal.png')
          .title('purple_crystal')
        Inventory.instance.addToInventory(_purpleCrystal)
      end


      });

    this.addAmbience('waves.ogg');
  }


}