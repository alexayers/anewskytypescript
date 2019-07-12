import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room16 extends Scene {

  constructor() {
    super();

    this.addBackgroundImage('room16/room16_1b.png');


    this.addMiddlegroundImage('room16/room16_1m.png');
    this.addMiddlegroundImage('room16/room16_2m.png');
    this.addMiddlegroundImage('room16/room16_3m.png');
    this.addMiddlegroundImage('room16/room16_4m.png');
    this.addMiddlegroundImage('room16/room16_5m.png');
    this.addMiddlegroundImage('room16/room16_6m.png');

    this.addForegroundImage('room16/room16_1f.png');

    this.addDoor(new DoorBuilder(0, 0, 63, 350)
      .withDestination('room15')
      .withWalkSound('walk_sand.ogg')
      .build()
    );
    this.addDoor(new DoorBuilder(315, 0, 350, 350)
      .withDestination('room17')
      .withWalkSound('walk_sand.ogg')
      .build()
    );

    this.addItem(new ItemBuilder(141, 164, 204, 206)
      .withTitle('generator')
      .clickable()
      .withValue('not_powered')
      .withCallBack( {
        if Inventory.instance.isSelectedItem('power_cell')
            ItemManager.instance.getItem('generator').value('powered')
            Inventory.instance.dropSelected
            ItemManager.instance.getItem('generator').makeUnclickable
    
            clearForeground
            addForegroundImage('room16/room16_1fb.png')
    
            EventBus.instance.publishEvent(Event.new('room24', 'power'))
            EventBus.instance.publishEvent(Event.new('room17', 'power'))
    
            EventBus.instance.publishEvent(Event.new('broken_door', 'unlock'))
    
            AudioManager.instance.play('remove_power.ogg')
          else
            AudioManager.instance.play('empty_supply.ogg')
          end


      });

    this.addAmbience('cave.ogg');
  }


}