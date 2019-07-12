import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room21 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room21/room21_1b.png');

    this.addMiddlegroundImage('room21/room21_1m.png');
    this.addMiddlegroundImage('room21/room21_2m.png');
    this.addMiddlegroundImage('room21/room21_3m.png');
    this.addMiddlegroundImage('room21/room21_4m.png');

    this.addForegroundImage('room21/room21_1f.png');
    this.addForegroundImage('room21/room21_2f.png');
    this.addForegroundImage('room21/room21_3f.png');
    this.addForegroundImage('room21/room21_2f.png');

    this.addDoor(new DoorBuilder(297, 0, 350, 350)
      .withDestination('room20')
      .withWalkSound('walk_sand.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(250, 152, 288, 219)
      .withDestination('room33')
      .withWalkSound('walk_sand.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(98, 61, 226, 279)
      .clickable()
      .withTitle('sailboat')
      .withCallBack( {

        if Inventory.instance.isSelectedItem('parachute')
        Inventory.instance.dropSelected
        ItemManager.instance.getItem('sailboat').value('ready')

        clearForeground
        addForegroundImage('room21/room21_1fb.png')
        addForegroundImage('room21/room21_2fb.png')
        addForegroundImage('room21/room21_3fb.png')
        addForegroundImage('room21/room21_2fb.png')
        AudioManager.instance.play('sail.ogg')
      end

      }
    );

    this.addAmbience('waves.ogg');
  }


}