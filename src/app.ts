import { Firefly } from './model/firefly.js';
import { FirefliesGenerator } from './services/fireflies-generator.js';
import { Canvas } from './services/fireflies-renderer.js';

const canvas: Canvas = new Canvas('canvas');
const fireflies: Firefly[] = FirefliesGenerator.generate(
  canvas.width,
  canvas.height
);

canvas.render(fireflies);
