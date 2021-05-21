import { Firefly } from './model/firefly.js';
import { FirefilesGenerator } from './services/fireflies-generator.js';
import { Canvas } from './services/fireflies-renderer.js';
import { DistanceMap } from './services/distance-map.js';

const canvas: Canvas = new Canvas('canvas');
const fireflies: Firefly[] = FirefilesGenerator.generate(
  canvas.width,
  canvas.height
);

canvas.render(fireflies);
const distanceMap: DistanceMap = new DistanceMap(fireflies);
