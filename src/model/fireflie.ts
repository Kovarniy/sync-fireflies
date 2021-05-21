export interface IFirefile {
  x: number;
  y: number;
  delay: number;
  blink(): void;
}

export class Firefile implements IFirefile {
  x: number;

  y: number;

  delay: number;

  constructor(x: number, y: number, delay: number) {
    this.x = x;
    this.y = y;
    this.delay = delay;
  }

  blink() {}
}
