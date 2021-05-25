import { Firefly } from '../model/firefly.js';

export class Canvas {
  readonly width: number;
  readonly height: number;

  private fireflies: Firefly[];
  private ctx: CanvasRenderingContext2D;
  private image: HTMLImageElement;

  constructor(selector: string) {
    const canvas = document.querySelector(selector);
    if (canvas === null)
      throw new Error(`Element with tagname ${canvas} is not initialized!`);
    if (!(canvas instanceof HTMLCanvasElement))
      throw new Error("It's not a canvas!");

    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio;

    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    this.ctx.scale(scale, scale);

    this.width = canvas.width;
    this.height = canvas.height;
    this.fireflies = [];

    this.image = new Image();
    this.image.src = './../../resources/firefly.svg';
  }

  render(fireflies: Firefly[]): void {
    this.fireflies = fireflies;
    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const firefly of this.fireflies) {
      this.ctx.drawImage(this.image, firefly.x - 10, firefly.y - 10, 20, 20);

      this.ctx.beginPath();

      const blinkGradient = this.ctx.createRadialGradient(firefly.x, firefly.y, 2, firefly.x, firefly.y, 10);
      blinkGradient.addColorStop(0, `rgba(240, 214, 17, ${firefly.alpha})`);
      blinkGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

      this.ctx.fillStyle = blinkGradient;
      this.ctx.fillRect(firefly.x - 10, firefly.y - 10, 20, 20);
      this.ctx.fill();

      if (firefly.leftUntilBlink <= 0) {
        firefly.blink();
      } else {
        firefly.leftUntilBlink -= firefly.speed * 10;
      }
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }
}
