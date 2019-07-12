import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room25 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room25/room25_1b.png');
    this.addBackgroundImage('room25/room25_2b.png');
    this.addBackgroundImage('room25/room25_3b.png');
    this.addBackgroundImage('room25/room25_4b.png');

    this.addDoor(new DoorBuilder(0, 0, 47, 253)
      .withDestination('room19')
      .withWalkSound('walk_building.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(291, 0, 350, 249)
      .withDestination('room19')
      .withWalkSound('walk_building.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(53, 219, 106, 252)
      .clickable()
      .withCallBack( {
        if Inventory.instance.isSelectedItem('storage_device')
            clearBackground
            addBackgroundImage('room25/room25_1bb.png')
            addBackgroundImage('room25/room25_2bb.png')
            addBackgroundImage('room25/room25_3bb.png')
            addBackgroundImage('room25/room25_4bb.png')
    
            addMiddlegroundImage('room25/room25_1m.png')
    
            _mapPadEnter = ItemManager.instance.getItem('mapPadEnter')
    
            if _mapPadEnter.getValue == 'ready'
              addForegroundImage('room25/room25_1f_map.png')
            else
              addForegroundImage('room25/room25_1f.png')
            end
    
            Inventory.instance.dropSelected
          end
      });


    this.addItem(new ItemBuilder(240, 271, 304, 306)
      .clickable()
      .withTitle('mapload_enter')
      .withCallBack( {
        _mapPadEnter = ItemManager.instance.getItem('mapPadEnter')
    
          if _mapPadEnter.getValue == 'ready'
    
            _storageDevice = Item.new(nil, nil, nil, nil)
          .value('gps_loaded')
          .title('gpsDevice')
          .filename('storage.png')
    
            clearMiddleground
            clearForeground
            addForegroundImage('room25/room25_1f_storage.png')
            ItemManager.instance.getItem('mapload_enter')
          .makeUnclickable
    
            Inventory.instance.addToInventory(_storageDevice)
            AudioManager.instance.play('good_code.ogg')
          else
            AudioManager.instance.play('bad_code.ogg')
          end

      });

    this.addAmbience('maproom.ogg');
  }


}