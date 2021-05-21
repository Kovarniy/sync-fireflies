export interface IFirefly {
  readonly x: number;
  readonly y: number;
  delay: number;
  blink(): void;
}

export class Firefly implements IFirefly {
  readonly x: number;

  readonly y: number;

  delay: number;

  constructor(x: number, y: number, delay: number) {
    this.x = x;
    this.y = y;
    this.delay = delay;
  }

  blink() {}
}
