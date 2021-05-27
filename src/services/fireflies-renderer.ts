import { Firefly } from '../model/firefly.js';
import { DistanceMap } from '../services/distance-map.js';
import { settings } from '../settings.js';

export class Canvas {
  readonly width: number;
  readonly height: number;

  private fireflies: Firefly[] = [];
  private fireflyMap: boolean[][] = [];

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

    this.image = new Image();
    this.image.src = './../../resources/firefly.svg';
  }

  render(fireflies: Firefly[]): void {
    this.fireflies = fireflies;
    window.requestAnimationFrame(this.animate.bind(this));
    const distanceMap: DistanceMap = new DistanceMap(fireflies);
    // матрица смежности светлячков
    this.fireflyMap = distanceMap.firefliesMap;
  }

  fireflySycronize(currentIdx: number): void {
    this.fireflyMap[currentIdx].forEach((neighbour, neighbourIdx) => {
      if (neighbour === true) {
        let delta =
          settings.blinkCycleTime - this.fireflies[neighbourIdx].currentTime;
        // TODO: синхронизировать соседней
      }
    });
  }

  animate(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.fireflies.length; i++) {
      let firefly: Firefly = this.fireflies[i];

      this.ctx.drawImage(this.image, firefly.x - 10, firefly.y - 10, 20, 20);

      this.ctx.beginPath();

      const blinkGradient = this.ctx.createRadialGradient(
        firefly.x,
        firefly.y,
        2,
        firefly.x,
        firefly.y,
        10
      );
      blinkGradient.addColorStop(0, `rgba(240, 214, 17, ${firefly.alpha})`);
      blinkGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

      this.ctx.fillStyle = blinkGradient;
      this.ctx.fillRect(firefly.x - 10, firefly.y - 10, 20, 20);
      this.ctx.fill();

      if (firefly.currentTime >= firefly.blinkCycleTime) {
        firefly.blink();
        this.fireflySycronize(i);
        // Скорее всего тут нужно вызывать логику, когда мы подгоняем других светлячков
      } else {
        firefly.currentTime += firefly.speed * 10;
      }
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }
}
