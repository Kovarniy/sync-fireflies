import { Firefly } from '../model/firefly';

export class GenerateCanvas {
  readonly width: number | undefined;

  readonly height: number | undefined;

  constructor() {
    const canvas = document.querySelector('canvas');
    if (canvas === null) throw new Error('Сanvas is not initialized!');

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio;

    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    ctx?.scale(scale, scale);

    this.width = canvas?.width;
    this.height = canvas?.height;
  }
}
