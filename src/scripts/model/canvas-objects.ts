export interface IBasicObject {
  readonly x: number;
  readonly y: number;
}

export interface IBlinkObject extends IBasicObject {
  alpha: number;
  speed: number;
  currentTime: number;
  blinkCycleTime: number;
  isBlinked: boolean;
  blink(): void;
}
