import { FirefliesGenerator } from './services/fireflies-generator.js';
import { Canvas } from './services/fireflies-renderer.js';
const canvas = new Canvas('canvas');
const fireflies = FirefliesGenerator.generate(canvas.width, canvas.height);
canvas.render(fireflies);
