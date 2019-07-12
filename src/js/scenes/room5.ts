import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

export class Room5 extends Scene {

    constructor() {
        super();
        this.addBackgroundImage('room5/room5_1b.png');
        this.addBackgroundImage('room5/room5_2b.png');
        this.addBackgroundImage('room5/room5_3b.png');
    
        this.addMiddlegroundImage('room5/room5_1m.png');
        this.addMiddlegroundImage('room5/room5_2m.png');
    
        this.addDoor(new DoorBuilder(154, 131, 247, 267)
                    .withDestination('room18')
                    .withWalkSound('slide_door.ogg')
                    .lock()
                    .withTitle('slide_door')
                    .build()
        );

        this.addDoor(new DoorBuilder(306, 0, 350, 350)
                    .withDestination('room4')
                    .withWalkSound('walk_sand.ogg')
                    .build()
        );
    
    
        this.addItem(new ItemBuilder(270, 183, 302, 230)
                    .withTitle('keyreader')
                    .clickable()
                    .withCallBack( {
          if Inventory.instance.isSelectedItem('keycard')
            Inventory.instance.dropSelected
            clearMiddleground
            addMiddlegroundImage('room5/room5_1mb.png')
            addMiddlegroundImage('room5/room5_2mb.png')
    
            EventBus.instance.publishEvent(Event.new('slide_door', 'unlock'))
    
            AudioManager.instance.play('slide_door.ogg')
          end
    
    
        });
    
    
        this.addAmbience('wind.ogg');
    }


}