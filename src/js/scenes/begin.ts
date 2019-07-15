
import { Scene} from "../containers/scene";
import { DoorBuilder } from "../clickable/door";

export class Begin extends Scene {

    constructor() {
        super();

        this.addAmbience("begin.ogg");
        this.addBackgroundImage("begin/begin1.png");
        this.addBackgroundImage("begin/begin2.png");
        this.addBackgroundImage("begin/begin3.png");

        this.addDoor(
            new DoorBuilder(0,274,400,800)
            .withDestination("room1")
            .build()
        )
    }


}