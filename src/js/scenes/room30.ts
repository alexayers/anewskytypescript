
import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { Inventory} from "../containers/inventory";
import { EventBus} from "../event/eventbus";
import {Event} from "../event/event";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";

export class Room30 extends Scene {

    private _cross: HTMLImageElement;

    constructor() {
        super();

        this._cross = new Image();
        this._cross.src = 'resources/objects/crosshair.png';

        this.addBackgroundImage('room30/room30_1b.png');

        this.addMiddlegroundImage('room30/room30_1m.png');
        this.addMiddlegroundImage('room30/room30_2m.png');
        this.addMiddlegroundImage('room30/room30_3m.png');
        this.addMiddlegroundImage('room30/room30_4m.png');

        this.addDoor(new DoorBuilder(0,357,63,800)
                    .withDestination('room19')
                    .withWalkSound('walk_computer.ogg')
                    .build()          
        );

        this.addDoor(new DoorBuilder(340,353,398,798)
                    .withDestination('room19')
                    .withWalkSound('walk_computer.ogg')
                    .build()          
        );

        this.addItem(new ItemBuilder(null, null, null, null)
                    .withTitle('mapPad')
                    .withValue('0,0')
                    .build()          
        );

        this.addItem(new ItemBuilder(12, 305, 74, 339)
                .withTitle('mapPadEnter')
                .withValue('')
                .clickable()
                .withCallBack(() => {

                    let coords = ItemManager.getInstance().getItem('mapPad').value.split(',');
                    let coordX = Number(coords[0]);
                    let coordY = Number(coords[1]);

                    if (coordX == 4 &&
                        coordY == 3 &&
                        ItemManager.getInstance().getItem('pink_pilar').value == 'fixed' &&
                        ItemManager.getInstance().getItem('purple_pilar').value == 'fixed') {

                            ItemManager.getInstance().getItem('mapPadEnter').value = 'ready';

                            EventBus.getInstance().publish(new Event('room25', 'ready'));
                            this.clearBackground();
                            this.addBackgroundImage('room30/room30_1bd.png');
                            AudioManager.getInstance().play('good_code.ogg');
                        } else {
                            ItemManager.getInstance().getItem('mapPadEnter').value = '';
                            AudioManager.getInstance().play('bad_code.ogg');
                        }
                    })
                    .build()
         );

         this.addClickCallback(() => { 

            let x = 0;
            let y = 0;

            let mapPadEnter = ItemManager.getInstance().getItem('mapPadEnter');
      
            if (mapPadEnter.value != 'ready') {
              let coords = ItemManager.getInstance().getItem('mapPad').value.split(',');
              let coordX = Number(coords[0]);
              let coordY = Number(coords[1]);
      
              if (x >= 110 && x <= 140 &&
                  y >= 308 && y <= 337) {
                if (coordY < 4) {
                    coordY += 1
                }
            } else if (x >= 162 && x <= 195 &&
                  y >= 308 && y <= 337) {
                if (coordY > 0) {
                    coordY-= 1
                }
            } else if (x >= 218 && x <= 250 &&
                  y >= 308 && y <= 337) {
                if (coordX > 0) {
                    coordX-= 1
                }
            } else if (x >= 271 && x <= 382 &&
                  y >= 308 && y <= 337) {
                if (coordX < 5) {
                    coordX += 1
                }
            }
      
              let value = coordX + ',' + coordY;
              ItemManager.getInstance().getItem('mapPad').value = value;
              AudioManager.getInstance().play('good_code.ogg');
            } else {
              AudioManager.getInstance().play('bad_code.ogg');
            }
          });
      
          this.addRenderCallBack(() => {
            let coords = ItemManager.getInstance().getItem('mapPad').value.split(',');
            let x = Number(coords[0]);
            let y = Number(coords[1]);
      
            let xOffset = 55;
            let yOffset = 33;

            let canvas = <HTMLCanvasElement>document.getElementById('canvas');
		    let ctx = canvas.getContext("2d");
      
            for (let r = 0; r <=5 ; r++) {
                for (let c = 0; c <=6 ; c++) {
       
                    if (c == x && r == y) {
                        ctx.drawImage(this._cross, xOffset, yOffset, 11, 11);
                    }
            
                    xOffset += 44;
                }
      
                xOffset = 55
                yOffset += 44
            }
        });
      

         this.addAmbience('maproom.ogg');
    }

    public handleEvent(event: Event): void {
        this.clearBackground();
        this.addBackgroundImage('room30/room30_1bb.png');
        this.addBackgroundImage('room30/room30_1bc.png');
    }

}