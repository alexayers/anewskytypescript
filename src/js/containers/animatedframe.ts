
export class AnimatedFrame {
    private _currentFrame : number;
    private _frameRate: number;
    private _tick : number;
    private _frames : Array<HTMLImageElement>;

    constructor() {
        this._currentFrame = 0;
        this._frameRate = 16;
        this._tick = 0;
        this._frames = new Array();
    }

    public addFrame(filename: string): void {
        
        let image = new Image();
        image.src = filename;

        this._frames.push(image);

    }

    public getTotalFrames()  : number {
        return this._frames.length;
    }

    public render(renderContext:CanvasRenderingContext2D, canvas : HTMLCanvasElement) : void {
        

        renderContext.drawImage(
            this._frames[this._currentFrame],
            0,
            0,
            canvas.width,
            canvas.height
        );

        this._tick++;

        if (this._tick == this._frameRate) {
            this._tick = 0;
            this._currentFrame++;
        }

        if (this._currentFrame == this.getTotalFrames()) {
            this._currentFrame = 0;
        }


    }
}