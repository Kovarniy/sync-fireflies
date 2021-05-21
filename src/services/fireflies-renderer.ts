import { Firefly } from '../model/firefly';

export class GenerateCanvas {
  readonly width: number;

  readonly height: number;

  private ctx: CanvasRenderingContext2D | null;

  constructor(selector: string) {
    const canvas = document.querySelector(selector);
    if (canvas === null)
      throw new Error(`Element with tagname ${canvas} is not initialized!`);
    if (!(canvas instanceof HTMLCanvasElement))
      throw new Error("It's not a canvas!");

    this.ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio;

    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    this.ctx?.scale(scale, scale);

    this.width = canvas?.width;
    this.height = canvas?.height;
  }

  render(fireflies: Firefly[]): void {
    for (const firefile of fireflies) {
      // this.ctx?.fillStyle = 'yellow';
      this.ctx?.beginPath();
      this.ctx?.arc(firefile.x, firefile.y, 4, 0, 360);
      this.ctx?.fill();
    }
  }
}
