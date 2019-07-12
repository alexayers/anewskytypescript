import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room33 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room33/room33_1b.png');
    this.addBackgroundImage('room33/room33_2b.png');
    this.addBackgroundImage('room33/room33_3b.png');

    this.addMiddlegroundImage('room33/room33_1m.png');


    this.addDoor(new DoorBuilder(0, 0, 23, 201)
      .withDestination('room21')
      .withWalkSound('walk_sand.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(322, 0, 350, 35)
      .withDestination('room21')
      .withWalkSound('walk_sand.ogg')
      .build());
    this.addDoor(new DoorBuilder(0, 307, 350, 350)
      .withDestination('room21')
      .withWalkSound('walk_sand.ogg')
      .build()
    );


    this.addItem(new ItemBuilder(41, 239, 84, 302)
      .clickable()
      .withTitle('navStorage')
      .withCallBack( {

        if Inventory.instance.isSelectedItem('gpsDevice')
            ItemManager.instance.getItem('navStorage').value('ready')
            Inventory.instance.dropSelected
            clearMiddleground
            addMiddlegroundImage('room33/room33_1mb.png')
            AudioManager.instance.play('good_code.ogg')
          else
            AudioManager.instance.play('bad_code.ogg')
          end

      });

    addItem(new ItemBuilder(234, 22, 290, 257)
      .clickable()
      .withCallBack( {
        _navStorage = ItemManager.instance.getItem('navStorage')
          _sailBoat = ItemManager.instance.getItem('sailboat')
    
          if _navStorage.getValue == 'ready' &&
          _sailBoat.getValue == 'ready'
            EventBus.instance.publishEvent(Event.new('sceneManager', 'room34'))
          end


      });


    this.addAmbience('waves.ogg');
  }


}