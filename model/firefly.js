import { settings } from '../settings.js';
export class Firefly {
    constructor(x, y, currentTime) {
        this.isBlinked = false;
        this.alpha = 0;
        this.speed = 0.3;
        this.blinkCycleTime = settings.blinkCycleTime;
        this.x = x;
        this.y = y;
        // console.log(currentTime);
        this._currentTime = currentTime;
    }
    get currentTime() {
        return this._currentTime;
    }
    set currentTime(value) {
        this._currentTime = value > settings.blinkCycleTime ?
            settings.blinkCycleTime : value;
    }
    blink() {
        if (this.alpha <= 1 && !this.isBlinked) {
            this.alpha += this.speed * 0.3;
        }
        else {
            this.alpha -= this.speed * 0.3;
        }
        if (this.alpha >= 1) {
            this.isBlinked = true;
        }
        else if (this.alpha <= 0) {
            this.isBlinked = false;
            this.alpha = 0;
            this.currentTime = 0;
        }
    }
}
