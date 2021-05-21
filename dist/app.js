import { FirefilesGenerator } from './services/fireflies-generator.js';
import { GenerateCanvas } from './services/fireflies-renderer.js';
const canvas = new GenerateCanvas('canvas');
const fireflies = FirefilesGenerator.generate(canvas.width, canvas.height);
canvas.render(fireflies);
