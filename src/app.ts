import { Firefly } from './model/firefly';
import { FirefilesGenerator } from './services/fireflies-generator';
import { GenerateCanvas } from './services/fireflies-renderer';

const canvas: GenerateCanvas = new GenerateCanvas('canvas');
const fireflies: Firefly[] = FirefilesGenerator.generate(
  canvas.width,
  canvas.height
);

canvas.render(fireflies);
