export interface BasicObject {
    readonly x: number;
    readonly y: number;
}

export interface BlinkObject extends BasicObject {
    alpha: number;
    speed: number;
    leftUntilBlink: number;
    isBlinked: boolean;
    blink(): void;
}