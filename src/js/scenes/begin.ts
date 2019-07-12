
import { Scene} from "../containers/scene";
import { DoorBuilder } from "../clickable/door";

export class Begin extends Scene {

    constructor() {
        super();

        this.addBackground("begin/begin1.png");
        this.addBackground("begin/begin2.png");
        this.addBackground("begin/begin3.png");

        this.addDoor(
            new DoorBuilder(0,0,350,350)
            .destination("room1")
            .build()
        )
    }


}