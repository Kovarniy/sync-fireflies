import { IBlinkObject } from './canvas-objects';
import { settings } from '../settings';

export class Firefly implements IBlinkObject {
  readonly x: number;
  readonly y: number;

  isBlinked = false;
  alpha = 0;
  speed: number = 0.3;

  readonly blinkCycleTime: number = settings.blinkCycleTime;
  private _currentTime: number;

  get currentTime() {
    return this._currentTime;
  }
  set currentTime(value: number) {
    this._currentTime = value > settings.blinkCycleTime ?
      settings.blinkCycleTime : value;
  }

  constructor(x: number, y: number, currentTime: number) {
    this.x = x;
    this.y = y;
    // console.log(currentTime);
    this._currentTime = currentTime;
  }

  blink(): void {
    if (this.alpha <= 1 && !this.isBlinked) {
      this.alpha += this.speed * 0.3;
    } else {
      this.alpha -= this.speed * 0.3;
    }

    if (this.alpha >= 1) {
      this.isBlinked = true;
    } else if (this.alpha <= 0) {
      this.isBlinked = false;

      this.alpha = 0;
      this.currentTime = 0;
    }
  }
}
