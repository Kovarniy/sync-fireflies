import { FirefilesGenerator } from './services/fireflies-generator.js';
import { Canvas } from './services/fireflies-renderer.js';
import { DistanceMap } from './services/distance-map.js';
const canvas = new Canvas('canvas');
const fireflies = FirefilesGenerator.generate(canvas.width, canvas.height);
canvas.render(fireflies);
const distanceMap = new DistanceMap(fireflies);
// матрица смежности светлячков
const fireflyMap = distanceMap.firefliesMap;
