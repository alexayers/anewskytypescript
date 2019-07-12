
import { Scene} from "../containers/scene";
import { DoorBuilder } from "../clickable/door";

export class Begin extends Scene {

    constructor() {
        super();

        this.addBackgroundImage("begin/begin1.png");
        this.addBackgroundImage("begin/begin2.png");
        this.addBackgroundImage("begin/begin3.png");

        this.addDoor(
            new DoorBuilder(0,0,350,350)
            .withDestination("room1")
            .build()
        )
    }


}