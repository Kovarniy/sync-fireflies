import { BlinkObject } from "./canvas-objects";

export interface IFirefly extends BlinkObject {
  delay: number;
  leftUntilBlink: number;
}

export class Firefly implements IFirefly {
  readonly x: number;
  readonly y: number;
  readonly speed: number = 0.3;

  isBlinked = false;
  alpha = 0;
  leftUntilBlink: number;

  delay: number;

  constructor(x: number, y: number, delay: number) {
    this.x = x;
    this.y = y;
    this.delay = delay;
    this.leftUntilBlink = delay;
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
      this.leftUntilBlink = this.delay;
    }
  }
}
