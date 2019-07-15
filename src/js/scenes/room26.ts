import { Scene } from "../containers/scene";
import { DoorBuilder } from "../clickable/door";
import { ItemBuilder } from "../clickable/item";

import { EventBus} from "../event/eventbus";
import { Event} from "../event/event";
import { AudioManager} from "../managers/audiomanager";
import { ItemManager} from "../managers/itemmanager";


export class Room26 extends Scene {

    private _button1 : HTMLImageElement;
    private _button2 : HTMLImageElement;
    private _button3 : HTMLImageElement;
    private _button4 : HTMLImageElement;
    private _button5 : HTMLImageElement;
    private _button6 : HTMLImageElement;
    private _button7 : HTMLImageElement;
    private _button8 : HTMLImageElement;
    private _button9 : HTMLImageElement;
    private _button10 : HTMLImageElement;

    constructor() {
        super();

        this.addBackgroundImage('room26/room26_1b.png')

        this.addDoor(new DoorBuilder(0, 0, 350, 181)
                    .withDestination('room23')
                    .withWalkSound('walk_computer.ogg')
                    .build()
        );


        this.addItem(new ItemBuilder(222, 120, 329, 164)
                    .withTitle('keypad_enter')
                    .clickable()
                    .withValue('')
                    .withCallBack(() => {

                    if (ItemManager.getInstance().getItem('keypad_enter').value == '7,3,2,9,6,') {
                        this.clearBackground();
                        this.addBackgroundImage('room26/room26_1bb.png');

                        EventBus.getInstance().publish(new Event('energy_door', 'unlock'));
                        EventBus.getInstance().publish(new Event('room12', 'unlock'));

                        ItemManager.getInstance().getItem('keypad_enter').makeUnclickable();
                        AudioManager.getInstance().play('good_code.ogg');
                        AudioManager.getInstance().play('open_compartment.ogg');
                    } else {
                        ItemManager.getInstance().getItem('keypad_enter').value = '';
                        AudioManager.getInstance().play('bad_code.ogg');
                     }
            }).build()
        );

            this._button1 = new Image();
            this._button2 = new Image();
            this._button3 = new Image();
            this._button4 = new Image();
            this._button5 = new Image();
            this._button6 = new Image();
            this._button7 = new Image();
            this._button8 = new Image();
            this._button9 = new Image();
            this._button10 =new Image();

            this._button1.src= 'assets/images/objects/1.png';
            this._button2.src= 'assets/images/objects/2.png';
            this._button3.src= 'assets/images/objects/3.png';
            this._button4.src= 'assets/images/objects/4.png';
            this._button5.src= 'assets/images/objects/5.png';
            this._button6.src= 'assets/images/objects/6.png';
            this._button7.src= 'assets/images/objects/7.png';
            this._button8.src= 'assets/images/objects/8.png';
            this._button9.src= 'assets/images/objects/9.png';
            this._button10.src= 'assets/images/objects/10.png';

            

            this.addRenderCallBack(() => {
                let keyCode = ItemManager.getInstance().getItem('keypad_enter').value.split(',')
                let offset = 5

                let canvas = <HTMLCanvasElement>document.getElementById('canvas');
		            let ctx = canvas.getContext("2d");
          
                keyCode.forEach( (key) => { 
                    
                    switch (key) {
                        case '1':
                        ctx.drawImage(this._button1,offset, 35, 11, 11);
                        break;
                        case '2':
                            ctx.drawImage(this._button2, 35, 0, 11, 11);
                        break;
                        case '3':
                            ctx.drawImage(this._button3, 35, 0, 11, 11);
                        break;
                        case '4':
                            ctx.drawImage(this._button4, 35, 0, 11, 11);
                        break;
                        case '5':
                            ctx.drawImage(this._button5, 35, 0, 11, 11);
                        break;
                        case '6':
                            ctx.drawImage(this._button6, 35, 0, 11, 11);
                        break;
                        case '7':
                            ctx.drawImage(this._button7, 35, 0, 11, 11);
                        break;
                        case '8':
                            ctx.drawImage(this._button8, 35, 0, 11, 11);
                        break;
                        case '9':
                            ctx.drawImage(this._button9, 35, 0, 11, 11);
                        break;
                        case '10':
                            ctx.drawImage(this._button10, 35, 0, 11, 11);
                        break;
                    }
          
                  offset += 65
                });
          
            }
            );

            this.addClickCallback( () => { 

                let x =0;
                let y = 0;

                let keyCodeValue = ItemManager.getInstance().getItem('keypad_enter').value;
          
                if (keyCodeValue.length < 10) {
          
                  if (x >= 23 && x <= 65 &&
                      y >= 197 && y <= 261) {
                    keyCodeValue += '1,';
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 77 && x <= 130 &&
                      y >= 197 && y <= 261) {
                        keyCodeValue += '2,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 141 && x <= 196 &&
                      y >= 197 && y <= 261) {
                        keyCodeValue += '3,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 208 && x <= 262 &&
                      y >= 197 && y <= 261) {
                        keyCodeValue += '4,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 273 && x <= 326 &&
                      y >= 197 && y <= 261) {
                        keyCodeValue += '5,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 23 && x <= 65 &&
                      y >= 273 && y <= 337) {
                        keyCodeValue += '6,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 77 && x <= 130 &&
                      y >= 273 && y <= 337) {
                        keyCodeValue += '7,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 141 && x <= 196 &&
                      y >= 273 && y <= 337) {
                        keyCodeValue += '8,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 208 && x <= 262 &&
                      y >= 273 && y <= 337) {
                        keyCodeValue += '9,'
                    AudioManager.getInstance().play('computer_type.ogg')
                      } else if (x >= 273 && x <= 326 &&
                      y >= 273 && y <= 337) {
                    keyCodeValue += 'a,'
                    AudioManager.getInstance().play('computer_type.ogg')
                  }
          
                  ItemManager.getInstance().getItem('keypad_enter').value = keyCodeValue;
                }
          
          
              });
            
    }


}