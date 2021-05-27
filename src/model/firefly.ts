import { IBlinkObject } from './canvas-objects.js';
import { settings } from '../settings.js';

export class Firefly implements IBlinkObject {
  readonly x: number;
  readonly y: number;

  isBlinked = false;
  alpha = 0;
  speed: number = 0.3;

  readonly blinkCycleTime: number = settings.blinkCycleTime;
  currentTime: number;

  constructor(x: number, y: number, currentTime: number) {
    this.x = x;
    this.y = y;
    console.log(currentTime);
    this.currentTime = currentTime;
  }

  blink(): void {
    if (this.alpha <= 1 && !this.isBlinked) {
      this.alpha += this.speed * 0.1;
    } else {
      this.alpha -= this.speed * 0.1;
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
